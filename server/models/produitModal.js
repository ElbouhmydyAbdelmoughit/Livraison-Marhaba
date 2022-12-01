const mongoose = require("mongoose");

const Produit = mongoose.model(
  "Produit",
  new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String
  })
);

module.exports = Produit;