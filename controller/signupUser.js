const User = require('../models/user_model')
const bcrypt = require('bcrypt')

const createUser = async(req, res)=>{
    console.log(req.body)
    const { fullName, email, phoneNumber, password } = req.body
    if(!email || !password) return res.status(400).json({ 'message': 'Email and password are required'});    
    //check if the email already exist
    const duplicate = await User.findOne({ email: email }).exec();
    // if there is a duplicate email return a conflict message (409)
    if (duplicate) return res.sendStatus(409); 
    try {
        const hashedPassword = await bcrypt.hash(password, 10)  
        console.log(email, " and ", password)           
        const newUser = await User.create({
            "fullName": fullName,
            "email": email,
            "phoneNumber": phoneNumber,
            "password": hashedPassword,         
        }) 
        console.log(newUser);
        res.status(201).json({ "Success": `User ${fullname} created!`})
    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

module.exports = { createUser }