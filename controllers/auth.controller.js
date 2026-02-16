const userAuthService = require("../services/auth.service");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports.login = async(req, res) =>{
    try {
        const { username, password} = req.body;
        let user = await userAuthService.getUser({ username:username});
        if(!user) {
            return res.status(401).json({ error:'Authentication failed'});
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) {
            return res.status(401).json({ error:'Authentication failed'});
        }
        // crée et retourne le token
        const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRATION
        });
        return res.status(200).json({ token});
    } catch(e) {
        return res.status(400).json({status:400, message: e.message});
    }
}

module.exports.register = async(req, res) =>{
    try{
        // crée un user d'authentification
        let userAuth = User(req.body);
        // hash le mdp avec bcrypt
        let salt = await bcrypt.genSalt(10);
        userAuth.password = await bcrypt.hash(userAuth.password, salt);
        userAuth = await userAuthService.createUser(userAuth);
        return res.status(201).json({status:201, data: userAuth, message:"Succesfully User auth Created"});
    } catch(e) {
        return res.status(400).json({status:400, message: e.message});
    }
}