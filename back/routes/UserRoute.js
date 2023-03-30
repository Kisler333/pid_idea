const express = require('express')
const UserController = require ('./../controllers/UserController')
const router = express.Router()

router.route('/signIn')
.post(UserController.signIn)

router.route('/logIn')
.post(UserController.logIn)

module.exports = router;