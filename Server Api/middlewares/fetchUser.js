const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../controllers/authenticationControllers/createUserController');

const fetchUser = (req, res, next) => {

    //Get the user from the JWT token and ID to request object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        console.log("check")
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        
        next(); //the next function in the argument where this middleware is called will be called with this next()

    } catch (error) {
        res.status(401).send({ error: "error" })
    }
}



module.exports = fetchUser;
