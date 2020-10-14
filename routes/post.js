const express = require('express')
const router = express.Router()

const PostController = require('../controllers/post')

router.get('/', PostController.getPosts)
router.post('/add', PostController.addPost)

module.exports = router