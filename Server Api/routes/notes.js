const express = require('express');
const router = express.Router();


//this is the handler function for the route
router.get('/', (req, res)=>{

    res.json([]);

});

module.exports = router