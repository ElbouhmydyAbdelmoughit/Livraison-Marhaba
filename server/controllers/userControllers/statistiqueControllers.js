const db = require('../../models');
const mailer = require('../../middlewares/mailer');
const jwt = require('jsonwebtoken');
var storage = require('local-storage');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

// Create Main Model
const Categorie = db.categorie;
const Command = db.command;
const Payement = db.payement;
const Produit = db.produit;
const Role = db.role;
const Status = db.status;
const User = db.user;

const Statistique = async (req, res) => {
    const user = await User.aggregate([
        { $group: { _id: null, sum: { $count: {} } } }
    ])
    const command = await Command.aggregate([
        { $group: { _id: null, sum: { $count: {} } } }
    ])
    const payement = await Payement.aggregate([
        { $group: { _id: null, sum: { $count: {} } } }
    ])
    const categorie = await Categorie.aggregate([
        { $group: { _id: null, sum: { $count: {} } } }
    ])
    const produit = await Produit.aggregate([
        { $group: { _id: null, sum: { $count: {} } } }
    ])

    res.json({
        user: user,
        command: command,
        payement: payement,
        categorie: categorie,
        produit: produit
    })
}


module.exports = {Statistique}