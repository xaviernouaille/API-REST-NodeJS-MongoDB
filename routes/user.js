const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user')
const User = require('../models/user')

router.get('/', UserController.getAllUsers)

router.post('/search', UserController.searchUsers)

router.get('/:username', UserController.getOneUser)

module.exports = router