const dotenv = require('dotenv');
dotenv.config();

const { v4: uuidv4 } = require('uuid');
const morganBody = require('morgan-body');
const express = require('express');
const bodyParser = require('body-parser');

const baseController = require('./controllers/$baseController');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const loggerConfig = require('./config/logger');
app.use((req, res, next) => {
    req.id = uuidv4();
    next();
});
morganBody(app, loggerConfig);

const mongodb = require('./utils/mongodb');
mongodb.connect;

baseController(app);


app.listen(process.env.SERVER_PORT, () => {
    console.log(`🚀 Server listening on port ${process.env.SERVER_PORT}`);
});