const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fooduserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },

})
module.exports = mongoose.model('fooduser', fooduserSchema); 