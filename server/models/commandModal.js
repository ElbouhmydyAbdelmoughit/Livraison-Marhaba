const mongoose = require("mongoose");

const Command = mongoose.model(
  "Command",
  new mongoose.Schema({
    client: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    livreur: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    produit: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "produit"
      }
    ],
    quantite: Number,
    status: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "status"
      }
    ],
  })
);

module.exports = Command;