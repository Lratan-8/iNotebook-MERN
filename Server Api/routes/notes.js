const express = require('express');
const {fetchallnotes, addnote, updateNote} = require('../controllers/notesFunctionController');
const fetchUser = require('../middlewares/fetchUser');
const router = express.Router();
const {body, validationResult} = require('express-validator');


//this is the handler function for the route
//Route 1 - Get all the notes of the user from the database - Login required
router.get('/fetchallnotes', fetchUser, fetchallnotes);

//Route 2 - Add note made by user in the database - Login required
router.post('/addnote', fetchUser, [
    body('title', "Enter a valid title").isLength({min: 3}),
    body('description', "Description must be at least 5 characters").isLength({min: 5})
], addnote);

//Route 3 - Update an existing note in the database
router.put('/updatenote/:id', fetchUser ,updateNote);


module.exports = router