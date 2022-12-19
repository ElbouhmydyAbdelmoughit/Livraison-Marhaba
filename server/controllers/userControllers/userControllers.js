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

const getUser = async (req, res) => {
    const get_users = await User.find().populate('roles')
    let getUser = get_users.filter(role => role.roles[0].name == 'client' || role.roles[0].name == 'livreur')
    res.json(getUser)
}

const resetPassword = async (req, res) => {
    const {body} = req
    if(!body.last_password || !body.new_password || body.confirm_new_password != body.new_password) throw Error('Fill the all fields to reset your password')
    const token_reset = storage('token');
    const user_reset = await jwt.verify(token_reset, process.env.TOKEN_KEY)
    const find_user_reset = await User.findById(user_reset._id)
    const verify_last_password = await bcrypt.compare(body.last_password, find_user_reset.password)
    if(!verify_last_password) throw Error('Your password is incorrect')
    const hash_new_password = await bcrypt.hash(body.new_password, saltRounds)
    const update_reset_password = await User.updateOne({_id: find_user_reset._id}, {$set: {password: hash_new_password}})
    if(!update_reset_password) throw Error('Error')
    res.json({message: 'Your password is changed'})
}


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
        mailer.main('addLivreur', {email: user.email, password})
        res.json({message: 'Successfully, An email is sent to account', email: user.email, password: password})
    }else{
        throw Error('User not created try again')
    }
}


module.exports = {
    getUser,
    resetPassword,
    AddLivreur
}