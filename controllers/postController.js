const prisma = require("../prisma/index");

exports.createPosts = async (req, res) => {
  try {
    const { slug, title, body, authorId } = req.body;
    const post = await prisma.post.create({
      data: {
        slug,
        title,
        body,
        author: { connect: { id: authorId } },
      },
    });

    if(post){
        res.status(200).json({message:'Created a Post'})
    }
    
} catch (err) {
    console.log(err);
  }
};


exports.updatePost = async(req,res)=>{

    const {id} = req.params;

    const {title,body} = req.body

    try{

        const updatedPost = await prisma.post.update({
            where:{
                id
            },
            data:{
                title,
                body
            }
        })

        if(updatedPost){
            res.status(200).json({message:'updated a Post',updatedPost})
        }
        
        
    }catch(err){
        console.log(err)
        res.status(400).json({message:'post dosent exist'})
    }
    
}



exports.deletePost = async(req,res)=>{
    const {id} = req.params
    
    try{

        const deletedPost = await prisma.post.delete({
            where:{id}
        }) 


        if(deletedPost){
            res.status(200).json({message:'deleted the Post',deletedPost})
        }

        
    }catch(err){
        console.log(err)
        res.status(400).json({message:'post dosent exist to delete'})
    }
}


exports.getPosts = async(req,res)=>{
    try{
        const posts = await prisma.post.findMany()

        res.status(200).json({message:'got posts',posts})
        
    }catch(err){
        console.log(err)
        res.status(400).json({message:'no posts found '})

    }
}