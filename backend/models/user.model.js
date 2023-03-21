// importing modules
const mongoose = require('mongoose');

// schema setup
const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;