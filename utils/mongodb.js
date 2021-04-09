const mongoose = require('mongoose');
const mongodbConfig = require('../config/mongodb');
const dotenv = require('dotenv');
dotenv.config();

exports.connect = mongoose.connect(process.env.DATABASE_URI, mongodbConfig.option)
    .catch(error => console.log(error));