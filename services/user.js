require('mongoose')
const User = require('../models/user')
const db = require('../config/database')

exports.getUsers = async (query, limit) => {
    const maxLimit = limit ? limit : 10
    try {
        let users = await User.find(query).select('-password -_id').limit(maxLimit)
        if (users.length > 0) {
            return users
        } else {
            throw 'Aucun résultat'
        }
    } catch (err) {
        throw Error(err)
    }
}