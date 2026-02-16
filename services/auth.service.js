const User = require("../models/User.js");

// récupère un user
module.exports.getUser = async(query) =>{
    try{
        let user = await User.findOne(query);
        return user;
    }catch(e) {
        throwError("Error while query all one user : " + e);
}}
// crée un user
module.exports.createUser = async(user) =>{
    try {
        return await User.save();
    } catch(e) {
        throwError("Error while create user : "+e);
}}
