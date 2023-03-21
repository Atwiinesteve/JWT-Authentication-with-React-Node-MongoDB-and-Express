// importing modules
const mongoose = require('mongoose');

// schema setup
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Password is required']
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;