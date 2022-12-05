const db = require('../../models');
const jwt = require('jsonwebtoken');
var storage = require('local-storage');
const bcrypt = require('bcryptjs');
const { categorie } = require('../../models');
const saltRounds = 10;
// const User = require('../../models/categorieModal')

// Create Main Model
const Categorie = db.categorie;
const Command = db.command;
const Payement = db.payement;
const Produit = db.produit;
const Role = db.role;
const Status = db.status;
const User = db.user;

const addCategorie = async (req, res) => {
    const {body} = req
    if(!body.name) res.send("content can not be empty")
    const find_categorie = await Categorie.findOne({name: body.name})
    if(find_categorie) res.send(`You can't to add categorie '${body.name}'`)
    else{
        const user = await Categorie.create({
            name: body.name,
            description : body.description
        })
        if(user) res.send(user)
        if(!user) res.send('Error, you can to add user')
    }
}

const findCategorie = async (req, res) => {
    const findUser = await Categorie.find()
    if(!findUser) res.send('Error')
    res.send(findUser)
}

const updateCategorie = async (req, res) => {
    const user = await Categorie.findById(req.params.id)
    if(!user) throw Error ('User not found')

    const update_user = await Categorie.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    res.json(update_user)
}

const deleteCategorie = async(req, res) => {
    const user = await Categorie.findById(req.params.id)
    if(!user) throw Error ('your user is not deleted')
    await user.remove()
    res.json({message: 'delete successfully'})
}


module.exports = {
    addCategorie,
    findCategorie,
    updateCategorie,
    deleteCategorie,
}