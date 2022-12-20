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

const getCategorie = async (req, res) => {
  const categorie = await Categorie.find();
  res.json({categorie})
}

const addCategorie = async (req, res) => {
  const { name } = req.body;
  if (!name) res.send("content can not be empty");
  const find_categorie = await Categorie.findOne({ name });
  if (find_categorie) res.send(`You can't to add categorie ${name}`);
  else {
    const category = await Categorie.create({
      name: name,
    });
    if (!category) res.send("Error, you can to add user");
    if (category) res.json({message: `category ${category.name} is added`});
  }
};

const updateCategorie = async (req, res) => {
  const id = req.params.id
  const name = req.body.name
  if (!name) res.send("content can not be empty");
  const find_categorie = await Categorie.findById(id);
  if (!find_categorie) throw Error("User not found");
  const second_categorie = await Categorie.findOne({name: name})
  if (second_categorie) throw Error(`${name} is already existed`);
  const update_user = await Categorie.findByIdAndUpdate({_id: id}, {name: name});
  res.json({message: `Categorie ${name} is updated`});
};

const deleteCategorie = async (req, res) => {
  const id = req.params.id
  const status = req.params.status
  const find_categorie = await Categorie.findById(id)
  if(!find_categorie) throw Error('Error, Product not found')
  const delet_categorie = await Categorie.findByIdAndUpdate(id, { status: status });
  if(!delet_categorie) throw Error ('Error, Product is not deleted')
  if(find_categorie.status) res.json({message: 'delete successfully'})
  if(!find_categorie.status) res.json({message: 'reset successfully'})
}

module.exports = {
  getCategorie,
  addCategorie,
  updateCategorie,
  deleteCategorie,
}
