const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel") 

const register = async(req, res) => {
    try {
        const {username, password, role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({username, password: hashedPassword, role});
        await newUser.save();
        res.status(201).json({message: `User registered with username ${username}`})
    } catch (err) {
        res.status(500).json({message: "Something went wrong!"})
    }
}

const login = async(req, res) => {
    
}

module.exports = {
    register,
    login
}