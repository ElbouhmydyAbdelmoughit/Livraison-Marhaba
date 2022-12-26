const db = require("../../models");
const jwt = require("jsonwebtoken");
var storage = require("local-storage");
const bcrypt = require("bcryptjs");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");
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
  const token = req.params.token
  const verify_token = await jwt.verify(token, process.env.TOKEN_KEY)
  if (!verify_token) throw Error('Error Of token')
  const find_user = await User.findById(verify_token._id)
  if (!find_user) Error('Error user not found')
  const command = await Command.find({ livreur: verify_token._id })
    .populate({ path: 'produit', model: Produit })
    .populate({ path: 'client', model: User })
    .populate({ path: 'livreur', model: User })
    .populate({ path: 'status', model: Status })
  const status = await Status.find()
  res.json({ command, status })
}

const addCommand = async (req, res) => {
  const { body } = req
  if (!body.client || !body.produit || !body.quantite) throw Error('Fill the all fields to add command')
  const find_client = await User.findById(body.client)
  const find_produit = await Produit.findById(body.produit)
  const find_status_demende = await Status.findOne({ name: 'demandé' })
  if (!find_client) throw Error("Client not find")
  if (!find_produit) throw Error("Produit not find")
  const add_command = await Command.create({
    client: body.client,
    produit: body.produit,
    quantite: body.quantite,
    status: find_status_demende._id,
  })
  res.json({ message: `Your command is add: ${add_command._id}` })
}
const assignCommand = async (req, res) => {
  const command = req.body.c
  const livreur = req.body.l
  const find_livreur = await User.findById(livreur)
  if (!find_livreur) throw Error("Livreur not found");
  const update_command = await Command.findByIdAndUpdate({ _id: command }, { livreur: livreur });
  res.json({ message: `Commend ${command} asined to livreur ${find_livreur.username}` })
}

const statusCommand = async (req, res) => {
  const c = req.body.c
  const s = req.body.s
  const find_status = Status.findById(s)
  if (!find_status) throw Error("Error, ststus not found");
  const find_command = Command.findById(c)
  if (!find_command) throw Error("Error, command not found");
  const status_command = await Command.findByIdAndUpdate({ _id: c }, { status: s });
  res.json({ message: `Status of command ${c} is updated` })
}

module.exports = {
  getCommand,
  getCommandLivruer,
  addCommand,
  assignCommand,
  statusCommand
}
