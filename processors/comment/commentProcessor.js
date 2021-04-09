const Comment = require('../../models/comment');
const apiResponse = require('../../utils/apiResponse');

/*
let validate = async (req, res) => {
    console.log('validate');
    return true;
};
*/

let getCommentsByMovieId = async (req, res) => {
    try {
        let resultComments = await Comment.find({ movie_id: req.params.movieId });
        apiResponse(req, res, 1001, resultComments);
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

let getCommentById = async (req, res) => {
    try {
        let resultComment = await Comment.find({ _id: req.params.commentId });
        apiResponse(req, res, 1001, resultComment);
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

module.exports = {
    getCommentById: getCommentById,
    getCommentsByMovieId: getCommentsByMovieId
}
/*
exports.getCommentById = getCommentById
exports.getCommentsByMovieId = getCommentsByMovieId
*/