const Movie = require('../../models/movie');
const apiResponse = require('../../utils/apiResponse');

/*
let validate = async (req, res) => {
    console.log('validate');
    return true;
};
*/

let getMovieById = async (req, res) => {
    try {
        let resultMovie = await Movie.find({ _id: req.params.movieId });
        apiResponse(req, res, resultMovie.length > 0 ? 1001 : 1002, resultMovie);
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

module.exports = {
    getMovieById: getMovieById
}