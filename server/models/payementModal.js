const mongoose = require("mongoose");

const Payement = mongoose.model(
  "Payement",
  new mongoose.Schema({
    client: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ],
    adresse: String,
    price: String
  })
);

module.exports = Payement;