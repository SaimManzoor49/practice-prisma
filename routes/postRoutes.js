const express = require('express')
const postController = require('../controllers/postController')
const checkAuth = require('../middlewares/checkAuth')

const router = express.Router()


router.route('/getposts')
.get(postController.getPosts)

router.route('/createpost')
.post(checkAuth,postController.createPosts)

router.route('/updatepost/:id')
.put(checkAuth,postController.updatePost)

router.route('/deletepost/:id')
.delete(checkAuth,postController.deletePost)


module.exports = router