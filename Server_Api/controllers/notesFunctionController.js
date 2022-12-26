const express = require('express');
const jwt = require('jsonwebtoken');
const Notes = require('../models/Notes');
const { JWT_SECRET } = require('./authenticationControllers/createUserController');
const { body, validationResult } = require('express-validator');


//controller function 1 - To fetch all notes
const fetchallnotes = async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json([notes]);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }
};


//controller function 2 - To add a new note
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
};


//controller function 3 - To update an existing note
const updateNote = async (req, res) =>{
    try {
        const {title, description, tags} = req.body; //bringing them through destructuring
        //create a new note object
        const newNote = {};
        //now we will put conditions according to the updatations that we are getting
        if(title){newNote.title = title}; //if the request contains title for updatation, create title key and update it with the value
        if(description){newNote.description = description}
        if(tags){newNote.tags = tags};

        //find the note to be updated and then update it
        // const note = Notes.findByIdAndUpdate

        let note = await Notes.findById(req.params.id);  //finding the respective note in the database
        // let note = await Notes.findById(req.header('note-id')); We can also send the id in the header
        if(!note){    //checking if the note exists in the database or note
            return res.status(404).send("Not Found");
        };
        if(note.user.toString() !== req.user.id){ //checking if the note belong to the respective user
            return res.status(401).send("Not Allowed")
        };

        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true}); //finding the note by id and updating
        //findBy function are given by mongoose.
        //{$set : newNote} query is given by MongoDb
        //The $set operator replaces the value of a field with the specified value.(mongoDb documentation)
        //new:true means return me the modified promise and not the old one
        res.json({note});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }
};


//controller function 4 : Deleting a note

const deleteNote = async (req,res) =>{

}

module.exports = { fetchallnotes, addnote, updateNote, deleteNote};