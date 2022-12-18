const db = require('../../models');
const fs = require('fs');

const path = require('path')

const Categorie = db.categorie;
const Command = db.command;
const Payement = db.payement;
const Produit = db.produit;
const Cart = require('./cartController')
const produits = require('./produitControllers');
// const Cart = require('../model')
const { produit } = require('../../models');
const Role = db.role;
const Status = db.status;
const User = db.user;


const addCommand = async(req,res)=>{
    const {produitId} = req.body.produit
    const quantite = Number.parseInt(req.body.quantite)
    let cart = await Cart.cart()
    let produitDetails = await Produit.findById(produitId)
    if(!produitDetails){
        return res.json({
            type: 'not Found',
            msg:'Invalid request'
        })
        
    }
    if(cart){
        const indexFound = cart.items.findIndex(item => item.produit.id == produitId)
        if(indexFound !== -1 && quantite <=0){
            cart.items.splice(indexFound, 1);
            if(cart.items.length == 0){
                cart.subTotal = 0;
            }else{
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next)=>acc+ next)
            }
        }
        else if (indexFound !== -1) {
            cart.items[indexFound].quantite = cart.items[indexFound].quantite + quantite;
            cart.items[indexFound].total = cart.items[indexFound].quantity * produitDetails.price;
            cart.items[indexFound].price = produitDetails.price
            cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
        }
        else if (quantity > 0) {
            cart.items.push({
                produit: produitId,
                quantite: quantite,
                price: produitDetails.price,
                total: parseInt(produitDetails.price * quantite)
            })
            cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
        }
        else {
            return res.status(400).json({
                type: "Invalid",
                msg: "Invalid request"
            })
        }
        let data = await cart.save()
        res.json({
            type:'success',
            msg:'process successful',
            data: data
            
        })
    }else{
        const cartData = {
            items: [{
                produit: produitId,
                quantite: quantite,
                price: produitDetails.price,
                total: parseInt(produitDetails.price* quantite)
            }],
            subTotal: parseInt(produitDetails.price * quantity)
        }
        cart = await Cart.addItem(cartData)
        res.json(cart)
    }



}
// const getCommand = async()=>{

// }
// const updateCommand = async()=>{

// }
module.exports={
    addCommand,
}