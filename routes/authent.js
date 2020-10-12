const express = require('express')
const router = express.Router()

const AuthentController = require('../controllers/authent')

router.post('/signin', AuthentController.signin)

router.post('/signup', AuthentController.signup)

module.exports = router