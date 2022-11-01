const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({ name: 'string'}); // collection definition
const Cat = mongoose.model('Cat', catSchema); // Cat model definition

const userSchema = new mongoose.Schema({ firstName: 'string', lastName: 'string'}); // collection definition
const User = mongoose.model('User', userSchema); // User model definition

function createUser(firstName, lastName){
   return mongoose.connect('mongodb://localhost/my_database') // connect to a db
        .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)) // connection confirmation
        .then(() => User.create({ firstName, lastName}))
        .then(  user => console.log('User was successfully created', user))
        .then(()=> mongoose.connection.close())
        .catch(err => console.error('Error connecting to mongo', err));
}

function createCat(catName){
    return mongoose.connect('mongodb://localhost/my_database') // connect to a db
         .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)) // connection confirmation
         .then(() => new Cat({ name: catName}).save())
         .then(newCat => console.log('Cat was successfully created', newCat))
         .then(()=> mongoose.connection.close())
         .catch(err => console.error('Error connecting to mongo', err));
 }

 const users = [{firstName: 'Arcadio', lastName: 'Reyes'}, {firstName: 'Miguel', lastName: 'Curbelo'}]
 
 function createUsers(listOfUsers){
    return mongoose.connect('mongodb://localhost/my_database') // connect to a db
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)) // connection confirmation
    .then(() => User.insertMany(listOfUsers))
    .then(users => console.log('Users were successfully created', users))
    
 }

 function getAllUsers(){
    return mongoose.connect('mongodb://localhost/my_database')
    .then(() => User.find())
    .then(users => console.log('users length', users.length))
    .then(()=> mongoose.connection.close())
    .catch(err => console.error('Error connecting to mongo', err));
 }

 function getSingleUser(enteredName){
    return mongoose.connect('mongodb://localhost/my_database')
    // .then(() => User.find({firstName: enteredName}))
    .then(() => User.findOne({firstName: enteredName}))
    .then(foundUser => console.log('foundUser', foundUser))
    .then(()=> mongoose.connection.close())
    .catch(err => console.error('Error connecting to mongo', err));
 }

 getSingleUser('Lloyd')