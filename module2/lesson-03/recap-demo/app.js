const axios = require('axios');
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = 3001;

app.set('views', __dirname + '/views') // specify the views directory
app.set('view engine', 'hbs') 

hbs.registerPartials(__dirname + "/views/partials"); // registering my partial

app.use(express.static('public'))

app.get('/', (req, res) => { // Homepage route
    const data = {
        firstName: 'Lloyd', 
        lastName: 'Chambrier', 
        address: {
            street: "Marius Bauerstraat",
            number: 87
          },
        likesBanana: false, 
        likesCoffee: false, 
        citiesLived: ['London', 'Oxford', 'Chennai', 'Amsterdam']
    }

    
    res.render('index', data)
})

app.get('/about', (req, res) => { // About page route
    console.log(req.headers)
    const data2 = {
        firstName: 'Humberto', 
    lastName: 'Vallego', 
    address: {
        street: "Calle de San Sebastian",
        number: 96
      },
    likesBanana: true, 
    likesCoffee: false, 
    citiesLived: ['San Sebastian']}
    // res.render('about', {layout: false})
     res.render('about', data2)
})

app.get('/dogs', (req, res) => {
  axios.get('http://dog-api.kinduff.com/api/facts?number=3') // requesting facts data from API
  .then(apiResponse => {
    const dogFacts = apiResponse.data.facts; // storing dog facts from the API response
    res.render('dogs', { dogFacts: dogFacts }) // rendering the view with the data
  })
  .catch(err => console.log(err))  
})

app.get('/cats', (req, res) => {
  axios.get('https://cat-fact.herokuapp.com/facts') // requesting facts data from API
  .then(apiResponse => {
// storing dog facts from the API response
    // console.log(apiResponse.data) // [{ text:'....'}, {}]
    const catFacts = apiResponse.data.map( cat => cat.text);
    // console.log('catFacts', catFacts)
    res.render('cats', { catFacts: catFacts }) // rendering the view with the data
  })
  .catch(err => console.log(err))  
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })