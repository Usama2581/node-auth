const mongoose  = require('mongoose')

const mongoURI = 'mongodb+srv://usama:ZVa6udLXjr7aGEww@cluster0.npy0fyv.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useNewUrlParser: true })

module.exports = mongoose