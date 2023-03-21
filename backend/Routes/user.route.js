// importing modules
const express = require('express');

// importing controller functions
const { register } = require('../controllers/user.controller');

// route setup
const router = express.Router();

// get route
router.post('/register', register);

// exporting route
module.exports = router;