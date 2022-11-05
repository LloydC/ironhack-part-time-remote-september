const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User.model')

const app = express();

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true })) // enables express to parse what's incoming from req.body

mongoose.connect('mongodb://localhost/users-app')
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.log(err))

// HOME ROUTE
app.get('/', (req, res) => {
    User.find()
        .then( users => {
            console.log('users', users)
            res.render('home', { users }); // { users } -> {users: users}
        })
        .catch(err => console.log(err))
})
// SIGNUP ROUTE
app.get('/signup', (req,res)=>{
    res.render('signup')
})
// POST SIGNUP ROUTE
app.post('/signup', (req, res) => {
    console.log('req body', req.body)
    User.create(req.body)
        .then(newUser => {
            console.log('User has been created', newUser)
            res.redirect('/'); // GET Request to '/'
        })
        .catch(err => {
            console.log(err)

            if(err.code === 11000) {
                res.render('signup', {error: 'This username is already in use'})
            }
        })
    
})
// PROFILE ROUTE
app.get('/profile/:username', (req,res) => {
    const { username } = req.params; // const username = req.params.username
    console.log('username', username)
    User.findOne({ username })
        .then(user => {
            console.log('user', user)
            res.render('profile', { user })
        })
    
})

app.listen(3000, ()=> console.log('Example app is on port 3000'))