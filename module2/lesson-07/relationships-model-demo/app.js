const mongoose = require('mongoose');

const Cat = require('./models/Cat.model');
const Food = require('./models/Food.model');
const { Message } = require('./models/Message.model');
// Make a connection to the db
mongoose
  .connect('mongodb://localhost/catbook', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  // .then(()=>{
  //   return Message.create({title: 'Hello', body: 'this is my message'})
  // })
  // .then(message => {
  //   return Cat.findOneAndUpdate({name: 'Admin'}, {message: message}, {new: true})
  // } )
  .then(()=> Food.findOne({name: 'Cheese Sticks'})) // querying for a new food to be added
  .then(food => { // {name: 'Whisakas}
      const updatedCat =  Cat.findOne({name: 'Wiggles'}).then(foundCat => {
        const updateFoodsArray = foundCat.foods.push(food._id) // updating the cat foods array
        return foundCat.save(); // saving that change in the DB
      })
    return updatedCat
      }
    )
  .then(cat => console.log('cat update', cat))
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });



// Query the db for Wiggles
// Update the document Wiggles with Tuna's id
// Cat.findOneAndUpdate({name: 'Wiggles'}, {foods: ['62f4f7a15682d14cdfd8123e','62f4f7a15682d14cdfd81240', ]}, {new: true})
//     .then(updatedCat => console.log('update successful', updatedCat))
//     .then(()=>{
//         mongoose.connection.close(() => {
//             console.log(`Mongo connection disconnected`);
//             process.exit(0);
//           });
//     })
//     .catch(err => console.log(err));


// Add an embedded message example
// Cat.findOne({name: 'Admin'})
//   .then(cat => {
//     console.log(cat)
//     cat.message = {title: 'first title', body:'great cat'};
//     return cat.save();
//     })
//     .then(()=>{
//         console.log('Message add success!')
//     } )
//     .then(()=>{
//         mongoose.connection.close(() => {
//         console.log(`Mongo connection disconnected`);
//         process.exit(0);
//         });
//     })
//     .catch(err =>console.log(err));


// get the cat and foods

// Cat.findOne({name: 'Wiggles'})
// .populate("foods")
// .then(result => console.log('result: ', result))
// .then(()=>{
//             mongoose.connection.close(() => {
//                 console.log(`Mongo connection disconnected`);
//                 process.exit(0);
//               });
// })
// .catch(err => console.log(err))


// Close my connection to the db
