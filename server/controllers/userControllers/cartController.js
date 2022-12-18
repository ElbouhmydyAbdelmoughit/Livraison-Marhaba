const db = require('../../models');
const fs = require('fs');

const path = require('path')
const Command = db.command;

const cart = async(req,res)=>{
    await Command.find().populate({
        path: "items.produit",
        select: "name price total"
    })
    return cart[0]
}
const addItem = async payload => {
    const newItem = await Command.create(payload);
    return newItem
}
module.exports={
    cart,
    addItem
}