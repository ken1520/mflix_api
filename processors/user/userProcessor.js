const dotenv = require('dotenv');
dotenv.config();

const bcrypt = require('bcrypt');
const validator = require('validator');
const User = require('../../models/user');
const apiResponse = require('../../utils/apiResponse');

let getMovieById = async (req, res) => {
    try {
        if (validator.isMongoId(req.params.movieId)) {
            let resultMovie = await Movie.find({ _id: req.params.movieId });
            apiResponse(req, res, resultMovie.length > 0 ? 1001 : 1002, resultMovie);
        } else {
            apiResponse(req, res, 1008, []);
        }
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

let testLogin = async (req, res) => {
    // let commonPW = await bcrypt.hash('123456', bcrypt.genSaltSync(parseInt(process.env.SALT_LENGTH)));
    // let updateResult = await User.updateMany({}, { password: commonPW });
    let userResult = await User.findOne({ email: req.body.email });
    let isPwCorrect = bcrypt.compareSync('123456', userResult.password);
    console.log(isPwCorrect);
    res.send(userResult);
};

module.exports = {
    testLogin: testLogin,
    getMovieById: getMovieById
}