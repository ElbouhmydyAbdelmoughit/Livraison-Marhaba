const db = require('../../models');
const multer = require('multer');
const fs = require('fs');

const path = require('path')

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
    res.json({message: get_produit})
}

const addProduit = async (req, res) => {
    const {body} = req
    const x = req.files[0].filename 
    const add_produit = await Produit.create({
        ...body,
        image: {
            data: req.image,
            contentType: 'image/png'
        }
    })
    res.send(add_produit)
}

const updatProduit = async (req, res) => {
    const {body} = req
    res.send('updat produit')
}

const deletProduit = async (req, res) => {
    const delet_produit = await Categorie.findByIdAndRemove(req.params.id)
    if(!delet_produit) throw Error ('Produit is not deleted')
    res.json({message: 'delete successfully'})
}


module.exports = {
    getProduit,
    addProduit,
    updatProduit,
    deletProduit,
}