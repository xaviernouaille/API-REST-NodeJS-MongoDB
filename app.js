const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const fileUpload = require('express-fileupload');
app.use(fileUpload({
    createParentPath: true
}));

const cors = require('cors')
app.use(cors())

require('dotenv').config()

const isAuthenticated = require('./isAuthenticated')

app.use('/authent', require('./routes/authent'))
app.use('/users', require('./routes/user'))
app.use('/post', isAuthenticated, require('./routes/post'))

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on ${PORT}`))