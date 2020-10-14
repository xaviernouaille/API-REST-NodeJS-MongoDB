const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    lastname: String,
    username: String,
    password: String,
    private: Boolean
})
const User = mongoose.model('user', UserSchema)

module.exports = User