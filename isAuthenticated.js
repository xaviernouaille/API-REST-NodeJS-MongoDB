const { decode } = require("jsonwebtoken")

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1]
    try {
        jwt.verify(token, process.env.TOKEN_KEY);
        next()
    } catch (err) {
        res.status(403).json({ status: 403, message: "Please Sign in" })
    }
}