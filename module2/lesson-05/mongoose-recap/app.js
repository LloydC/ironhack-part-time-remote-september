const mongoose = require('mongoose');

const User = require('./models/User.model');
console.log(User)

mongoose
  .connect('mongodb://localhost/demo-recap')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .then(()=> User.find())
  .then(allUsers => {
    const users = allUsers;
    // console.log(users)
    return users;
  })
  .then(passedUsers => console.log('passedUsers', passedUsers))
//   .then(() => User.create({username: 'PaulFresnel', email: 'paulfresnel@gmail.com', password: 'jesfhoisheodisho'}))
//   .then(newUser => console.log('newUser was created successfully', newUser))
  .catch(err => console.error('Error connecting to mongo', err));