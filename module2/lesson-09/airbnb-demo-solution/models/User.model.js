// First Name
// Last Name
// Gender
// Email address
// Phone Number 
// Address
// Properties
// Bookings

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName : {type: String},
    lastName : {type: String},
    gender: {type: String, enum: ['Male', 'Female']},
    email: {type: String, required: true},
    phone: {type: String}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
