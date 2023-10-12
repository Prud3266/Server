const User = require('../models/user_model')
const bcrypt = require('bcrypt')

const loginUser = async(req, res)=>{
    const { email, password } = req.body
    console.log(req.body);
    if(!email || !password) return res.status(400).json({ 'message': 'Email and password are required'});
    const foundUser = User.find(user => user.email === email)
    if(!foundUser) return res.sendStatus(401)
    // Check password
    const match = await bcrypt.compare(password, foundUser.password)
    if (match) {
        res.json({ "message": `User with the email ${email} is logged in`})
    }else{
        res.sendStatus(401)
    }
}

module.exports = loginUser