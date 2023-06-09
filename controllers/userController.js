const prisma = require("../prisma/index");
const setCookie = require("../utils/setCookie");

const setUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !name || !password) {
      res.status(400).json({ message: "all Fields are Required" });
    } else {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });

      setCookie(user, res);
    }
  } catch (err) {
    console.log(err);
  }
};

const  getUser = async(req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }


  const user =await prisma.user.findUnique({
    where:{
        email
    }
  });
  if (!user) {
    return res.status(400).json({ message: "user dosent exists" });
}
if (user.password === password) {
    setCookie(user, res);
}else{
    
    return res.status(400).json({ message: "Wrong password" });
  }
};

const logoutUser = (req,res)=>{

    try{
        res.clearCookie('jwt').status(200).json({message:'logedOut'})
    }catch(err){
        console.log(err)

    }

}

module.exports = { setUser, getUser,logoutUser };
