const Movie = require('../../models/movie');
const apiResponse = require('../../utils/apiResponse');

/*
let validate = async (req, res) => {
    console.log('validate');
    return true;
};
*/

let getCommentByMovieId = async (req, res) => {
    try {
        let resultMovie = await Movie.find({ _id: req.params.movieId });
        apiResponse(req, res, 1001, resultMovie);
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

let getCommentById = async (req, res) => {
    try {
        let resultMovie = await Movie.find({ _id: req.params.movieId });
        apiResponse(req, res, 1001, resultMovie);
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

module.exports = {
    getCommentById: getCommentById,
    getCommentByMovieId: getCommentByMovieId
}