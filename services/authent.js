require('mongoose')
const User = require('../models/user')
const db = require('../config/database')

exports.signin = async (username, password) => {
    try {
        const user = await User.findOne({ username: { $regex: username, $options: 'i' } })
        if (!user || user.password != password) {
            throw 'Username or password are incorrect'
        }
        else {
            return user
        }
    } catch (err) {
        throw Error(err)
    }
}

exports.signup = async (name, lastname, username, password, confirm) => {
    try {
        if (name != '' && lastname != '' && username != '' && password != '' && confirm != '') {
            if (password != confirm) {
                throw 'Password is not equal to confirm'
            } else {
                const user = await User.findOne({ username: { $regex: username, $options: 'i' } })
                if (user) {
                    throw 'This username is already use' //bug
                } else {
                    //save user
                }
            }
        } else {
            throw 'All fields are required'
        }
    } catch (err) {
        throw Error(err)
    }
}