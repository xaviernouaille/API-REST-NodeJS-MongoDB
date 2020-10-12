const User = require('../models/user')
const UserService = require('../services/user')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getUsers({})
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getOneUser = async (req, res) => {
    const username = new RegExp('^' + req.params.username + '$', 'i');

    try {
        const user = await UserService.getUsers({ username: username })
        return res.status(200).json({ status: 200, data: user, message: "Succesfully User Retrieved" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.searchUsers = async (req, res) => {
    const username = new RegExp(req.body.username, 'i')

    try {
        const user = await UserService.getUsers({ username: username }, 5)
        return res.status(200).json({ status: 200, data: user, message: "Succesfully Users Retrieved" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}