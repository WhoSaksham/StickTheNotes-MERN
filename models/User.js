const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('user', UserSchema)