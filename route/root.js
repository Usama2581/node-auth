const express = require('express')
const router = express.Router()

router.use('/users', require('./userRoute'))

module.exports = router