const express = require('express')
const db = require('./config/db')
const app = express()
const helmet = require('helmet')


db.connection
.once('open', () => console.log("connected to db"))
.on("error", (err) => console.log("error connecting db -->", err))

app.listen(5000, function () {
    console.log('App listening to Port 4000')
})

 
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', require('./route/root'))



// fetch('users/register', {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//       name: 'Iphone',
//       email: 'iphone@gmail.com',
//       password: 'ghujiuhju'
//   })
// })
// .then(res => res.json())
// .then(res => console.log(res))