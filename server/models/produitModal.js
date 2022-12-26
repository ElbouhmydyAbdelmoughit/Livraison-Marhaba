const mongoose = require("mongoose");

const Produit = mongoose.model(
  "Produit",
  new mongoose.Schema({
    title: String,
    quantity:{
      type:Number,
      default:0
    },
    categorie: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie"
      }
    ],
    description: String,
    price: Number,
    image: Array,
    status: {
      type: Boolean,
      default: true
    }
  })
);

module.exports = Produit;