const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MessageSchema = new Schema({
    _id: {type: String},
    url: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    hash: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Message = mongoose.model('Message', MessageSchema);