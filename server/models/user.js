const mongoose = require('mongoose');

const User = mongoose.model("User", {
    username: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    },
    createdAt: {
        type: Date,
        default: new Date().toDateString()
    },
    description: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: 'Corpse fighter'
    }
});

module.exports = {User};