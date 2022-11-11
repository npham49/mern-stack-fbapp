const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')


// @desc    Register new user
// @route   POST api/users
// @access  Public
const registerUser = asyncHandler(async(req,res) => {
    res.json({message:'register user'})
})

// @desc    Authenticate a user
// @route   POST api/users/login
// @access  Public
const loginUser = asyncHandler(async(req,res) => {
    res.json({message:'log in'})
})

// @desc    Get user data
// @route   POST api/users/me
// @access  Public
const getMe = asyncHandler(async(req,res) => {
    res.json({message:'user data'})
})


module.exports = {
    registerUser,
    loginUser,
    getMe,
}