const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user')

router.get('/', UserController.getAllUsers)

router.get('/:username', UserController.getOneUser)

module.exports = router