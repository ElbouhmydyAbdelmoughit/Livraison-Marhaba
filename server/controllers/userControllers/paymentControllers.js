const db = require('../../models');
const fs = require('fs');

const path = require('path');
const { aggregate } = require('../../models/userModal');

const Categorie = db.categorie;
const Command = db.command;
const Payement = db.payement;
const Produit = db.produit;
const Role = db.role;
const Status = db.status;
const User = db.user;


const getPayment = async (req, res) => {
    const payement = await Payement.find()

    res.send(payement)
}
const addPayement = async(req,res)=>{
    let {phone, adress, price, mode,client} = req.body
    const payment = await Payement.create({
        client:client,
        adress:adress,
        phone:phone,
        price:price,
        mode:mode
    })
    res.send(payment)
}
module.exports = {
    getPayment,
    addPayement
}