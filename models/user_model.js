const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 60,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    image:{
        type: String,
        default: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    refreshToken: String,    
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('user', UserSchema)