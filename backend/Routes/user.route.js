// importing modules
const express = require('express');

// route setup
const router = express.Router();

// get route
router.post('/register', register);

// exporting route
module.exports = router;