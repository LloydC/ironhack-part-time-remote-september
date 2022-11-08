const mongoose = require('mongoose')

// set a connection to the db
mongoose
  .connect('mongodb://localhost/catbook', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const Food = require('../models/Food.model');

 
  const foods = [{
    name: 'Wiskas',
},{
    name: 'Tuna',
},{
    name: 'Cheese Sticks',
},{
    name: 'Catnip',
}]
// create some entries in your db
  Food.insertMany(foods)
    .then(food => {
        console.log('created food: ', food)
        //close the connection
        mongoose.disconnect()
    })