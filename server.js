const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./utils/mongodb');

const baseController = require('./controllers/$baseController')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongodb.connect;

baseController(app);


app.listen(process.env.SERVER_PORT, () => {
    console.log(`🚀 Server listening on port ${process.env.SERVER_PORT}`);
});