const db = require('../../models');
const multer = require('multer');

// Create Main Model
const Categorie = db.categorie;
const Command = db.command;
const Payement = db.payement;
const Produit = db.produit;
const Role = db.role;
const Status = db.status;
const User = db.user;


const getProduit = async (req, res) => {
    const get_produit = await Produit.find();
    res.json(get_produit)
}

const addProduit = async (req, res) => {
    const {body} = req
    res.send(body.image)
}

const updatProduit = async (req, res) => {
    const {body} = req
    res.send('updat produit')
}

const deletProduit = async (req, res) => {
    res.send('delet produit')
}


module.exports = {
    getProduit,
    addProduit,
    updatProduit,
    deletProduit,
}