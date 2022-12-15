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

const getCommand = async()=>{

}
const addCommand = async()=>{
    const addedProduct = Produit.findById(req.params.produit)

    Command.save(addedProduct)
}
const updateCommand = async()=>{

}