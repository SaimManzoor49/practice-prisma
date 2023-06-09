const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()


router.route('/signup')
.post(userController.setUser)

router.route('/login')
.post(userController.getUser)

router.route('/logout')
.get(userController.logoutUser)


module.exports = router