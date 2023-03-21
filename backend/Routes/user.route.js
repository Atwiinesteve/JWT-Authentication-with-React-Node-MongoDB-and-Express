// importing modules
const express = require("express");

// importing controller functions
const { register, login } = require("../controllers/user.controller");

// route setup
const router = express.Router();

// register (post) route
router.post("/register", register);

// login (post) route
router.post("/login", login);

// exporting route
module.exports = router;
