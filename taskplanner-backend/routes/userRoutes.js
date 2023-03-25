const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUser } = require("../controllers/userController");
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const valiadateToken = require('../middleware/validTokenHandler');
const { validate } = require('../models/userModel');



router.post('/register', registerUser);
router.post("/login", loginUser);
router.get("/alluser",  valiadateToken, getAllUser )




module.exports = router;
