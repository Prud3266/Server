const express = require('express')
const router = express.Router();
const user = require('../models/user_model')
const signupUser = require('../controller/signupUser')

router.post('/signup', signupUser.createUser)

module.exports = router