const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@bdd.tbeut.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('DB ON!'));

module.export = () => {
    const db = mongoose.connection
}