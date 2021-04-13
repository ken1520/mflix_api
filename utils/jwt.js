const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

let verify = async (token) => {
    return await jwt.verify(token, process.env.KEY);
}

let createToken = (data) => {
    return jwt.sign(data, process.env.KEY, {
        expiresIn: process.env.AUTH_EXPIRE_IN
    });
}

module.exports = {
    verify: verify,
    createToken: createToken
}