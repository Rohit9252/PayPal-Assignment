const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();




// @desc Regsiter a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please fill all fields');
    }


    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashPassword
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            message: 'User created successfully'
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }



});


// @desc login a user
// @route POST /api/users
// @access Public
const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;


    if (!email || !password) {
        res.status(400);
        throw new Error('Please fill all fields');
    }

    const user = await User.findOne({ email });


    if (user && (await bcrypt.compare(password, user.password))) {



        const accessToken = jwt.sign({
            user:{
                name: user.name,
                email: user.email,
                id: user._id
            },
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' }   )
        res.status(200).json({
            accessToken
        });


    } else {

        res.status(400);
        throw new Error('Invalid email or password');
    }
});


// @desc Get all users
// @route GET /api/users
// @access Private\
const getAllUser = asyncHandler(async (req, res) => {

    const user = await User.find();


    if (user) {
        res.status(200).json(user);
    }else{
        res.status(400);
        throw new Error('Invalid user data');
    }

});



module.exports = {
    registerUser,
    loginUser,
    getAllUser
}
