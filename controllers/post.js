const Post = require('../models/post');
const PostService = require('../services/post')

exports.addPost = async (req, res) => {
    // username = req.headers.token
    const username = req.body.username
    const file = req.body.file

    try {
        const post = await PostService.addPost(file, username)
        return res.status(200).json({ status: 200, data: post, message: "Succesfully File Upload" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getPosts = async (req, res) => {
    // username = req.headers.token
    const username = req.body.username

    try {
        const posts = await PostService.getPosts(username)
        return res.status(200).json({ status: 200, data: posts, message: "Succesfully Fetch Post" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}