const Post = require('../models/post');
const PostService = require('../services/post')
const jwt = require('jsonwebtoken')

exports.addPost = async (req, res) => {
    const decodedToken = jwt.decode(req.headers['authorization'].split(' ')[1])
    const username = decodedToken.token.username
    const file = req.body.file

    try {
        const post = await PostService.addPost(file, username)
        return res.status(200).json({ status: 200, data: post, message: "Succesfully File Upload" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getPosts = async (req, res) => {
    const username = req.body.username

    try {
        const posts = await PostService.getPosts(username)
        return res.status(200).json({ status: 200, data: posts, message: "Succesfully Fetch Post" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}