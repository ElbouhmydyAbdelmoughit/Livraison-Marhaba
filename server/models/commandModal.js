const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
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
  quantite: {
    type: Number,
    min:[1, 'Quantity can not be less then 1.']
  },
  price: Number,
  total: Number,
  status: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "status"
    }
  ],
})

const Command = mongoose.model(
  "Command",
  new mongoose.Schema({
    items:[ItemSchema],
    subTotal:{
      default:0,
      type: Number
    }

  })
);

module.exports = Command;