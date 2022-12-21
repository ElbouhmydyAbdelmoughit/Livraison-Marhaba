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
  const find_role_livreur = await Role.find({name: 'livreur'})
  const livreur = await User.find({role: find_role_livreur})
  const command = await Command.find()
    .populate({ path: 'produit', model: Produit })
    .populate({ path: 'client', model: User })
    .populate({ path: 'livreur', model: User })
    .populate({ path: 'status', model: Status })
  res.json({ command, livreur })
}

module.exports = {
  getCommand
}
