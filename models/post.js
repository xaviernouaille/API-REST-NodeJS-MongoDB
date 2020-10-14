const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    url: String,
    username: String
})
const Post = mongoose.model('post', PostSchema)

module.exports = Post

