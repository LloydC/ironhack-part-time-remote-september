const express = require('express') // loads the express package
const app = express() // executes an express server 
const port = 3000 // defining our server port

app.use(express.static('public')); // configuration step which tells where my static files are located

app.get('/', (req, res) => { // defining my homepage route
//console.log(__dirname)
res.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (req, res) => { // defining my about page route
    res.send('About Page')
})

app.get('/contact', (req, res) => { // defining my contact page route
    res.send('Contact Page')
})

app.get('/cat', (req, res, next) => {
    res.sendFile(__dirname + '/views/cat.html')
  });

app.listen(port, () => { // allows incoming requests from clients
  console.log(`Example app listening on port ${port}`)
})