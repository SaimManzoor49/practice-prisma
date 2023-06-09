const jwt = require('jsonwebtoken')

const getJwt = (userId)=>{

    return jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'1d'})

}

module.exports = getJwt