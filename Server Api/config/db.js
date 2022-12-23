// we require mongoose and mongoDb URI
const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/inotebook';

//we will now create a function to establish our connection with MongoDb

const connectToMongo = async () =>{
    //mongoose.connect is a function given by mongoose to connect with MongoDB.                                                          Instead of this callback function inside mongoose.connect,   we can also use await.
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
};


//we have to export this function to use it
module.exports = connectToMongo

