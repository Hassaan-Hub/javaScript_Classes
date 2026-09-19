const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }
})

const note = mongoose.model('user', noteSchema);

module.exports = note