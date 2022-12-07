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

const addCategorie = async (req, res) => {
  const { name } = req.body;
  if (!name) res.send("content can not be empty");
  const find_categorie = await Categorie.findOne({ name });
  if (find_categorie) res.send(`You can't to add categorie ${name}`);
  else {
    const category = await Categorie.create({
      name: name,
    });
    if (category) res.send(category);
    if (!category) res.send("Error, you can to add user");
  }
};

const findCategorie = async (req, res) => {
  const findUser = await Categorie.find();
  if (!findUser) res.send("Error");
  res.send(findUser);
};

const updateCategorie = async (req, res) => {
  const user = await Categorie.findById(req.params.id);
  if (!user) throw Error("User not found");

  const update_user = await Categorie.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(update_user);
};

const deleteCategorie = async (req, res) => {
  const user = await Categorie.findById(req.params.id);
  if (!user) throw Error("your user is not deleted");
  await user.remove();
  res.json({ message: "delete successfully" });
};

module.exports = {
  addCategorie,
  findCategorie,
  updateCategorie,
  deleteCategorie,
};
