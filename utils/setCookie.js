const getJwt = require('../helpers/getJwt') 

const setCookie = (user,res)=>{

    const token = getJwt(user.id)
    user.password = undefined
    res.status(200).cookie('jwt',token,{expiresIn:1000*60*60*24*3, httpOnly:true}).json({message:'Your Cookie Has been set',user})


}


module.exports = setCookie