const mongoose = require("mongoose");

const Categorie = mongoose.model(
  "Categorie",
  new mongoose.Schema({
    name: String,
  })
);

module.exports = Categorie;
