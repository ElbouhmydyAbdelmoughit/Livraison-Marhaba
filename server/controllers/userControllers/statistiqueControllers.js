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

const StatistiqueManager = async (req, res) => {
    const user = await User.aggregate([
        // {$lookup: {
        //     from: "users",
        //     localField: "role",
        //     foreignField: "_id",
        //     as: "client",
        // }},
        // {$match: {"client.name" : 'client'}},
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
    let n_user = 0
    let n_command = 0
    let n_payement = 0
    let n_categorie = 0
    let n_produit = 0

    if (user.length === 0) { n_user = 0 } else { n_user = user[0].sum }
    if (command.length === 0) { n_command = 0 } else { n_command = command[0].sum }
    if (payement.length === 0) { n_payement = 0 } else { n_payement = payement[0].sum }
    if (categorie.length === 0) { n_categorie = 0 } else { n_categorie = categorie[0].sum }
    if (produit.length === 0) { n_produit = 0 } else { n_produit = produit[0].sum }

    res.json({
        user: n_user,
        command: n_command,
        payement: n_payement,
        categorie: n_categorie,
        produit: n_produit
    })
}

const StatistiqueLivreur = async (req, res) => {
    const command = await Command.aggregate([
        { $group: { _id: null, sum: { $count: {} } } }
    ])

    let command_livreur = 0

    if (command_livreur.length === 0) { command_livreur = 0 } else { command_livreur = command[0].sum }

    res.json({
        command: command_livreur
    })
}

const StatistiqueClient = async (req, res) => {
    const command = await Command.aggregate([
        { $group: { _id: null, sum: { $count: {} } } }
    ])

    let command_client = 0

    if (command_client.length === 0) { command_client = 0 } else { command_client = command[0].sum }

    res.json({
        command: command_client
    })
}


module.exports = {
    StatistiqueManager,
    StatistiqueLivreur,
    StatistiqueClient
}