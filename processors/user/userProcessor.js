const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcrypt');
const validator = require('validator');
const User = require('../../models/user');

const jwt = require('../../utils/jwt');
const apiResponse = require('../../utils/apiResponse');

let userLogin = async (req, res) => {
    // let commonPW = await bcrypt.hash('123456', bcrypt.genSaltSync(parseInt(process.env.SALT_LENGTH)));
    // let updateResult = await User.updateMany({}, { password: commonPW });
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
                apiResponse(req, res, 1001, returnResult);
            } else {
                apiResponse(req, res, 1001, 'wrong password');
            }
        } else {
            apiResponse(req, res, 1003, {});
        }
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

let userRegistration = async (req, res) => {
    // let commonPW = await bcrypt.hash('123456', bcrypt.genSaltSync(parseInt(process.env.SALT_LENGTH)));
    // let updateResult = await User.updateMany({}, { password: commonPW });
    try {
        
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

module.exports = {
    userLogin: userLogin,
    userRegistration: userRegistration
}