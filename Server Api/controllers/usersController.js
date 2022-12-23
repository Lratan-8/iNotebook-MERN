const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


//controller function, which will be a callback function in the router
const createUser = async (req, res) => {

    //if there are errors, return bad request and the errors
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };

    //before creating a user in the database check whether the user with this email exists already in Dbs
    /*findOne() is a query given by mongoose that searches the database for the respective key value pair
    and returns us the data if that exists. This is a function we put on our model.
    Note - Model does not only create a database, it also fetches the database as we have learnt
    in the MVC structure*/
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "sorry a user with this email already exists" });
        }

        //adding password encryption
        const salt = await bcrypt.genSalt(10); //creating a salt 
        const secPass = await bcrypt.hash(req.body.password, salt); //generating a secure password using salt and hash


        //now in the database we will create a user 
        //this returns a promise with all the data from the database after the user was created
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured")
    }
    // .then(user => res.json(user)).catch(err=>{
    //   console.log(err);
    //   res.json({error : "please enter a unique value", message: err.message})
    // });

    // const user = User(req.body);
    //user.save() is a function given by mongoose
    // user.save();
    // res.send(req.body);

};

module.exports = createUser;