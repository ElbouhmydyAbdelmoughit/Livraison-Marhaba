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

const AddLivreur = async (req, res) => {
    const {username, email } = req.body;
    if (!username || !email) {
      res.status(400);
      res.json({ message: "all fiels id required" });
    }
    let password = Math.random().toString(36).substr(2, 8);
    const double = await User.findOne({ email: email }).exec();
    if (double) return res.status(409).json({ message: "This email already exist" }); //Conflict
    const role = await Role.findOne({ roles: "livreur" });
    let hashedpassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
          username,
          email,
          verification: true,
          status: true,
          roles: role._id,
          password: hashedpassword,
    });
    if(user){
        mailer.main('addLivreur', {user, password})
        res.json({message: 'Successfully, An email is sent to account', email: user.email, password: password})
    }else{
        throw Error('User not created try again')
    }

}


module.exports = {
    AddLivreur
}