const mongoose = require('mongoose');
// const { messageSchema } = require('./Message.model');

const Schema = mongoose.Schema;

const message = new Schema({
    title: String,
    body: String
})

const catSchema = new Schema({
    name: String,
    age: Number,
    bio: String,
    dateOfBirth: Date,
    message: message,
    foods: [{type: Schema.Types.ObjectId, ref: 'Food'}],
})

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat