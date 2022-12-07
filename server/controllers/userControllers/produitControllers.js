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
    if(!body.title || !body.description || !body.price || !body.categorie) throw Error('Fill the all fields to add meal')
    const categorie = await Categorie.findOne({name: body.categorie})
    if (!categorie) throw Error("Invalid Category")
    let images = []
    req.files.forEach(e=>{
        images.push(e.filename)
    })
    const add_produit = await Produit.create({
        ...body,
        categorie: categorie._id,
        image: images
    })
    res.json(add_produit)
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