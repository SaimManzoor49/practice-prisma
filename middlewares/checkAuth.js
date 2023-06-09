const jwt = require('jsonwebtoken')
const prisam = require('../prisma/index')

const checkAuth =async(req,res,next)=>{

    try{
        const token = req.cookies.jwt
        if(!token){
            res.status(400).json({message:'User is not LogedIn'})
            next()
        }
        const auth = jwt.verify(token,process.env.JWT_SECRET)

        const user = await prisam.user.findUnique({
            where:{
                id:auth.userId
            }
        })
        req.user = user;
        next()
        
    }catch(err){
        res.status(400).json({message:err})

    }



}


module.exports = checkAuth