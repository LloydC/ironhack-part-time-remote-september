const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
                     username: {
                        type: 'String',
                        required: true,
                        unique: true
                     }, 
                     email: {
                        type: 'String',
                        required: true,
                        unique: true
                     }, 
                     password: {
                        type: 'String',
                        required: true,
                     },
                     maritalStatus: {
                        type: 'String',
                        enum: ['Married', 'Single'],
                        default: 'Single'
                     }
                    });

const User = model('User', userSchema);

module.exports = User;