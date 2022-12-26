const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const createUser = require('../controllers/authenticationControllers/createUserController').createUser; //this is our create user controller function 
const {login, getUserDetails} = require('../controllers/authenticationControllers/loginAuthentication'); //this is our login user controller function and we have used object desctructuring to get these functions
const fetchUser = require('../middlewares/fetchUser');


//this is the handler function for the route
//we are further mapping route - /api/auth to /api/auth/user
// router.get('/user', (req, res)=>{

//     res.json("Hello mapped object");

// });


//ROUTE 1
//this route can be removed later
router.get('/', (req, res) => {

  //we are able to send response 
  // res.json("Hello, you're in auth homepage");
  //we can send and read anything in the request's body -
  console.log(req.body);
  //what if I send res.body in the request only. We will be able to see it in the browser
  res.send(req.body)

});

//we will create a user now.
//create a User using : POST "/api/auth/create"   -//doesn't require auth, that means user do not have to be logged in to access this end point
//router and controller to create a new user

//ROUTE 2
router.post('/createuser',
  //to validate our items from the request, we will make an array of validators between route and callback function
  //these validator functions are coming from express-validators
  [
    body('email', "Enter a valid email").isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 })
  ], 
  createUser
);

//ROUTE 3
//router and controller to authenticate user logging in  - Login not required
router.post('/login', 
  [
    body('email', "Enter a valid email").isEmail(),
    body('password',"Password cannot be blank").exists()
  ], 
  login
);

//ROUTE 4
//Decoding logged in user details from the JWT so that the server can give back the right information - Login middle
router.post('/getUserDetails',fetchUser, getUserDetails);



module.exports = router