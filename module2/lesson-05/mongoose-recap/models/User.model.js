const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
                     username: 'string', 
                     email: 'string', 
                     password: 'string' 
                    });

const User = model('User', userSchema);

module.exports = User;