const dotenv = require('dotenv');
const express = require('express');
const mongodb = require('./utils/mongodb');

dotenv.config();

mongodb.connect;

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server listening on port ${process.env.SERVER_PORT}`);
});