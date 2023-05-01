const express = require('express')
const UserController = require ('./../controllers/UserController')
const router = express.Router()

router.route('/signIn')
.post(UserController.signIn)

router.route('/logIn')

.post(UserController.logIn)

router.route('/dashboard')
.get(UserController.getImages)

// router.route('/searchImages')
// .get(UserController.searchImages)

module.exports = router;