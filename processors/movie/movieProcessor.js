const validator = require('validator');
const Movie = require('../../models/movie');
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

module.exports = {
    getMovieById: getMovieById
}