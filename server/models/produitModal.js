const mongoose = require("mongoose");

const Produit = mongoose.model(
  "Produit",
  new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: {
      data: Buffer,
      contentType: String
    },
  })
);

module.exports = Produit;