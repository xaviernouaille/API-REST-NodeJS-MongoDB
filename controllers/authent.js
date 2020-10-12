const User = require('../models/user')
const AuthentService = require('../services/authent')

exports.signin = async (req, res) => {
    const { username, password } = req.body

    try {
        const users = await AuthentService.signin(username, password)
        return res.status(200).json({ status: 200, data: users, message: "Success" })
    } catch (e) {
        return res.status(400).json({ status: 403, message: e.message });
    }
}

exports.signup = async (req, res) => {
    const { name, lastname, username, password, confirm } = req.body

    try {
        const user = await AuthentService.signup(name, lastname, username, password, confirm)
        return res.status(200).json({ status: 200, data: user, message: "Success" })
    } catch (e) {
        return res.status(400).json({ status: 403, message: e.message });
    }
}