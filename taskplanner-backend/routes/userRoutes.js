const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.post('/register', registerUser);
router.post("/login", loginUser);




module.exports = router;
