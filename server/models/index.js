const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.categorie = require("./categorieModal");
db.command = require("./commandModal");
db.payement = require("./payementModal");
db.produit = require("./produitModal");
db.role = require("./roleModal");
db.status = require("./statusModal");
db.user = require("./userModal");

// Creat status of repas
db.role.estimatedDocumentCount((err, count) => {
    if (!err && count != 3) {
        db.role.findOne({name: 'manager'})
            .then((e)=>{
                if(!e){
                    new db.role({
                        name: "manager"
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'manager' added to roles collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })

        db.role.findOne({name: 'livreur'})
            .then((e)=>{
                if(!e){
                    new db.role({
                        name: "livreur"
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'livreur' added to roles collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })

        db.role.findOne({name: 'client'})
            .then((e)=>{
                if(!e){
                    new db.role({
                        name: "client"
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'client' added to roles collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })
    }
});

// Creat status of repas
db.status.estimatedDocumentCount((err, count) => {
    if (!err && count != 3) {
        db.status.findOne({name: 'demand??'})
            .then((e)=>{
                if(!e){
                    new db.status({
                        name: "demand??"
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'demand??' added to status collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })

        db.status.findOne({name: 'livraison...'})
            .then((e)=>{
                if(!e){
                    new db.status({
                        name: "livraison..."
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'livraison...' added to status collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })

        db.status.findOne({name: 'livr??'})
            .then((e)=>{
                if(!e){
                    new db.status({
                        name: "livr??"
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'livr??' added to status collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })
    }
});


module.exports = db;