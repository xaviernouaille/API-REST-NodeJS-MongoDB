require('mongoose')
const User = require('../models/user')
const db = require('../config/database')

exports.getUsers = async (query) => {
    try {
        let users = User.find(query).select('-password -_id')
        return users
    } catch (e) {
        throw Error('Erreur')
    }
}