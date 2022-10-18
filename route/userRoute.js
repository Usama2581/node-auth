const express = require('express')
const router = express.Router()
const Users = require('../model/Users')
// const verifyToken = require('../middlewares/verifyToken')

router.get('/', async (req, res) => {
    const user = await Users.find()
    res.send(user)
})

router.post('/register', async (req, res) => {
    try {
        const user = new Users(req.body)
        await user.save()
    
        res.send({ message: 'Successfully added' })
    } catch (e) {
        console.log('e --->', e)
        res.send({ message: e.message })
    }
})


router.post('/login', async(req,res) => {

    const { email, password } = req.body 
    const user = await Users.findOne({ email })
    
    if(!user) {
        res.send('user doesnot exsist')
    }

    const validPassword = await user.comparePassword(password)
    if(!validPassword) {
        res.send('wrong password')
    }

    const token = await user.generateToken()
    res.send({ message: 'logged in' })
    
})



module.exports = router

/*
    In order to get BODY from frontend in your POST request:

    1. In main index.js, put the following code:
    
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));

    2. Use fetch like this:

    fetch('ads/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Iphone',
            price: 50000
        })
    })
    .then(res => res.json())
    .then(res => console.log(res))
*/
