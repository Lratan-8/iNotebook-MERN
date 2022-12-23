import mongoose from 'mongoose';
const { Schema } = mongoose;

const notesSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    tags:{
        type: String,
        default : "General"
    },
    description: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('notes',notesSchema);