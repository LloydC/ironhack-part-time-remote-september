require('dotenv').config()// makes the "process.env" accessible
const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

const { PORT } = process.env;

app.set('views', 'views');
app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, '/public'))); 

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) 

app.get('/', (req,res) => {
    res.render('home')
})

app.get('/profile/:username', (req, res)=>{
    const templateUser = {username: 'Lloyd', _id: 'jhfsoishefoiuhseoidhf'}
    console.log(req.params)
    const { username } = req.params;
    // Query the database to find the user with a matching username
    // User.findOne({username: ....}).then(user => res.render('profile', { user }))
    // Send that user indformation to the front end
    res.render('profile', { username, templateUser })
})

app.get('/search', (req,res) => {
    console.log(req.query)
    res.send(req.query)
})

app.get('/signup', (req,res) => {
    res.render('signup')
})

app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


app.listen(PORT, ()=> console.log(`App is running on port ${PORT}`))