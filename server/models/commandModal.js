const mongoose = require("mongoose");
const Command= mongoose.model(
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
  quantite: {
    type: Number,
    min:[1, 'Quantity can not be less then 1.']
  },
  total: Number,
  payement:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: "payements"
    }
  ],
  status: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "status"
    }
  ],
})

);

module.exports = Command;