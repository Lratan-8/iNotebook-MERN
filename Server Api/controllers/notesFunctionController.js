const express = require('express');
const jwt = require('jsonwebtoken');
const Notes = require('../models/Notes');
const { JWT_SECRET } = require('./authenticationControllers/createUserController');
const { body, validationResult } = require('express-validator');


//controller function 1
const fetchallnotes = async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json([notes]);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }
};

//controller function 2
const addnote = async (req, res) => {

    try {

        const { title, description, tags } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        };
        const note = await new Notes({  // this is creating a new note out of the Note schema
            title, description, tags, user: req.user.id
        });
        const savedNote = await note.save(); // we are saving the new note in the database
        res.json(savedNote);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }



}


module.exports = { fetchallnotes, addnote };