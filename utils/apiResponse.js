const dotenv = require('dotenv');
dotenv.config();

const response = require('../config/response');

module.exports = (req, res, resCode, resData) => {
    res.send({
        success: resCode === 1001 ? true : false,
        returnCode: resCode,
        systemMessage: response[resCode].systemMessage,
        displayMessage: response[resCode].displayMessage,
        result: resData
    })
};