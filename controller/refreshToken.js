const User = require('../models/user_model')
const bcrypt = require('bcrypt')

const refreshToken = (req, res)=>{
    const cookies = req.cookies
    console.log(req.body);
    if(!cookies?.jwt) return res.statusStatus(401)
    console.log(cookies.jwt)
    const refreshToken = cookie.jwt

    const foundUser = User.find(user => user.refreshToken === refreshToken)
    if(!foundUser) return res.sendStatus(403)
    // Check jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.email !== decoded.username) return res.sendStatus(403);
            const accessToken = jwt.sign(
                { "username": decoded.email },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' }
            )
            res.json({ accessToken })
        }
    )
    
}

module.exports = loginUser