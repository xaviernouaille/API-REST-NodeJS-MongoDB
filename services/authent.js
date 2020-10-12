require('mongoose')
const User = require('../models/user')
const db = require('../config/database')
const bCrypt = require('bcrypt')

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
    const passwordRegexp = RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$')
    try {
        if (name != '' && lastname != '' && username != '' && password != '' && confirm != '') {
            if (!passwordRegexp.test(password)) {
                throw 'Password need to have at lease one digits, one lowercase character, one uppercase character, one special character and 8 characters in length'
            }
            else if (password != confirm) {
                throw 'Password is not equal to confirm'
            }
            else {
                const user = await User.findOne({ username: { $regex: username, $options: 'i' } })
                if (user) {
                    throw 'This username is already use'
                } else {
                    password = await bCrypt.hash(password, 10)
                    const newUser = new User({
                        name: name,
                        lastname: lastname,
                        username: username,
                        password: password
                    }).save()
                    return newUser
                }
            }
        } else {
            throw 'All fields are required'
        }
    } catch (err) {
        throw Error(err)
    }
}