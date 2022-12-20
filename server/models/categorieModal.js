const mongoose = require("mongoose");

const Categorie = mongoose.model(
  "Categorie",
  new mongoose.Schema({
    name: String,
    status: {
      type: Boolean,
      default: true
    }
  })
);

module.exports = Categorie;
