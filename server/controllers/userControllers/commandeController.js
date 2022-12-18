const db = require('../../models');
const fs = require('fs');

const path = require('path')

const Categorie = db.categorie;
const Command = db.command;
const Payement = db.payement;
const Produit = db.produit;
const Role = db.role;
const Status = db.status;
const User = db.user;


const getCommand = async (req, res) => {
    const payement = await Command.find()

    res.send(payement)
}

module.exports = {
    getCommand
}