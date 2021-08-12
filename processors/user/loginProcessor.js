const bcrypt = require('bcrypt');
const validator = require('validator');
const User = require('../../models/user');

const jwt = require('../../utils/jwt');
const apiResponse = require('../../utils/apiResponse');
const processorStart = require('../../utils/processorStart');

let validate = async (req, res, method) => {
    return true;
};

let procedure = async (req, res) => {
    try {
        let userResult = await User.findOne({ email: req.body.email });
        if (userResult) {
            let isPwCorrect = bcrypt.compareSync(req.body.password, userResult.password);
            if (isPwCorrect) {
                let returnResult = {};
                returnResult.name = userResult.name;
                returnResult.email = userResult.email;
                
                let token = jwt.createToken(returnResult);
                returnResult.token = token;
                console.log('okok');
                return returnResult;
            } else {
                console.log('no pw');
            }
        } else {
            console.log('no userResult');
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    start: (req, res) => {
        processorStart(req, res, validate, procedure)
    }
}