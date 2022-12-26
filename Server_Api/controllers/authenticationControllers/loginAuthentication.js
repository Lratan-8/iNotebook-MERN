
const express = require('express');
const { validationResult } = require('express-validator');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('./createUserController').JWT_SECRET; //we are importing jwt secret key that we created while creating a user.


//controller 1 - login authentication 
const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };

    const { email, password } = req.body; //destructuring of object to take out email and password from the body of the request
    try {
        let user = await User.findOne({ email: email }); //we are finding a user by email and if we found a user then saving its info to 'user'
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" }); //if the user with that email doesn't exist in the database
        }

        const passwordComparison = await bcrypt.compare(password, user.password); // and if the user exists then we are comparing the password entered by user which we took out after desctructuring the req.body to the password encrypted in the database

        if(!passwordComparison){ //if password doesn't match
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const data = { //if password matches then we are creating a login jwt token
            user: {
                id: user.id
            }
        };
        const jwtAuthToken = jwt.sign(data, JWT_SECRET);
        res.send({jwtAuthToken});

    } catch (error) {

        console.log(error.message);
        res.status(500).send("Internal Server Error");

    }
};


//controller 2 - Decoding user details from the JWT

const getUserDetails = async (req,res) =>{

    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
    }

}

module.exports = {login,getUserDetails};