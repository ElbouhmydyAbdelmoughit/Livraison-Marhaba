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
    const produit = await Produit.find().populate({path: 'categorie', model: Categorie});
    res.json({produit})
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
    res.json({message: `Repas ${add_produit.title} is added`})
}

const updatProduit = async (req, res) => {
    const {body} = req
    const id = req.params.id
    res.send(body)
    // if(!id || !body.title || !body.description || !body.price || !body.categorie) throw Error('Fill the all fields to add meal')
    // const categorie = await Categorie.findOne({name: body.categorie})
    // if (!categorie) throw Error("Invalid Category")
    // const add_produit = await Produit.updateOne({
    //     ...body,
    //     categorie: categorie._id
    // })
    // const update_produit = await Categorie.findByIdAndUpdate(
    //     id, {
    //         ...body,
    //         categorie: categorie._id
    //     }
    //   );
    // res.json({message: `Repas ${add_produit.title} is updated`, update_produit})
}

const deletProduit = async (req, res) => {
    const id = req.params.id
    const find_produit = await Produit.findById(id)
    if(!find_produit) throw Error('Error, Product is not found')
    for(let i=0; i<find_produit.image.length; i++){
       fs.unlinkSync(`C:/Users/Youcode/Desktop/Livraison-Marhaba/server/public/upload/${find_produit.image[i]}`)
    }
    const delet_produit = await Produit.deleteOne({_id: id})
    if(!delet_produit) throw Error ('Error, Product is not deleted')
    res.json({message: 'delete successfully'})
}


module.exports = {
    getProduit,
    addProduit,
    updatProduit,
    deletProduit,
}