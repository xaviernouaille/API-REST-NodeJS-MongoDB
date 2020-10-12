const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('dotenv').config()

app.use('/users', require('./routes/user'))
app.use('/authent', require('./routes/authent'))

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on ${PORT}`))