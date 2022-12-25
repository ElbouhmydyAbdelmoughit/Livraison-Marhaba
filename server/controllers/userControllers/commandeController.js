const db = require("../../models");
const jwt = require("jsonwebtoken");
var storage = require("local-storage");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

// Create Main Model
const Categorie = db.categorie;
const Command = db.command;
const Payement = db.payement;
const Produit = db.produit;
const Role = db.role;
const Status = db.status;
const User = db.user;

const getCommand = async (req, res) => {
  const find_role_livreur = await Role.find({ name: 'livreur' })
  const livreur = await User.find({ roles: find_role_livreur })
  const command = await Command.find()
    .populate({ path: 'produit', model: Produit })
    .populate({ path: 'client', model: User })
    .populate({ path: 'livreur', model: User })
    .populate({ path: 'status', model: Status })
  res.json({ command, livreur })
}

const getCommandLivruer = async (req, res) => {
  const token = storage('token')
  console.log(token)
  // const status = await Status.find()
  // const command = await Command.find({ client: find_role_livreur })
  //   .populate({ path: 'produit', model: Produit })
  //   .populate({ path: 'client', model: User })
  //   .populate({ path: 'livreur', model: User })
  //   .populate({ path: 'status', model: Status })
  // res.json({ command, status })
}

const addCommand = async (req, res) => {
  const { body } = req
  if (!body.client || !body.produit || !body.quantite) throw Error('Fill the all fields to add command')
  const find_client = await User.findById(body.client)
  const find_produit = await Produit.findById(body.produit)
  const find_status_demende = await Status.findOne({name: 'demandé'})
  if (!find_client) throw Error("Client not find")
  if (!find_produit) throw Error("Produit not find")
  const add_command = await Command.create({
    client: body.client,
    produit: body.produit,
    quantite: body.quantite,
    status: find_status_demende._id,
  })
  res.json({message: `Your command is add: ${add_command._id}`})
}
const assignCommand = async (req, res) => {
  const command = req.body.c
  const livreur = req.body.l
  const find_livreur = await User.findById(livreur)
  if (!find_livreur) throw Error("Livreur not found");
  const update_command = await Command.findByIdAndUpdate({ _id: command }, { livreur: livreur });
  res.json({ message: `Commend ${command} asined to livreur ${find_livreur.username}` })
}

module.exports = {
  getCommand,
  getCommandLivruer,
  addCommand,
  assignCommand
}
