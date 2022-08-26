require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.DB_URI;

const connToMongo = () => {
    try {
        mongoose.connect(mongoURI);
        console.log('Connection successful to DB!')
    }
    catch (err) {
        console.log(err.message)
    }
};

module.exports = connToMongo