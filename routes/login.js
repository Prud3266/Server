const express = require('express')
const router = express.Router()
const user = require('../models/user_model')
const verifyJWT = require('../middleware/verifyJWT')
const loginUser = require('../controller/loginUser')


router.post('/', verifyJWT, loginUser.loginUser)

module.exports = router