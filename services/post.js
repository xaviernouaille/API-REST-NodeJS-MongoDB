require('mongoose')
const Post = require('../models/post')
const User = require('../models/user')
const db = require('../config/database')

exports.addPost = async (file, username) => {
    try {
        if (file != '' && username != '') {
            const url = './upload/' + username + 155612
            //file.mv(url)
            const newPost = new Post({
                url: url,
                username: username
            }).save()
            return newPost
        } else {
            throw 'You can`t post empty message'
        }
    } catch (err) {
        throw Error(err)
    }
}

exports.getPosts = async (username) => {
    try {
        const user = await User.findOne({ username: { $regex: username, $options: 'i' } })
        if (!user) {
            throw 'Erreur, utilisateur inexistant'
        } else {
            if (user.private == false) {
                const posts = await Post.find({ username: { $regex: username, $options: 'i' } })
                if (posts.length > 0) {
                    return posts
                } else {
                    throw 'Cette utilisateur n\'a pas encore posté'
                }
            } else {
                throw 'Cette utilisateur est en privé'
            }
        }
    } catch (err) {
        throw Error(err)
    }
}