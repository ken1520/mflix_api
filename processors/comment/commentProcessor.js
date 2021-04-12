const validator = require('validator');
const Comment = require('../../models/comment');
const apiResponse = require('../../utils/apiResponse');

let getCommentsByMovieId = async (req, res) => {
    try {
        if (validator.isMongoId(req.params.movieId)) {
            let resultComments = await Comment.find({ movie_id: req.params.movieId });
            apiResponse(req, res, resultComments.length > 0 ? 1001 : 1002, resultComments);
        } else {
            apiResponse(req, res, 1008, []);
        }
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

let getCommentById = async (req, res) => {
    try {
        if (validator.isMongoId(req.params.commentId)) {
            let resultComment = await Comment.find({ _id: req.params.commentId });
            apiResponse(req, res, resultComment.length > 0 ? 1001 : 1002, resultComment);
        } else {
            apiResponse(req, res, 1008, []);
        }
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

module.exports = {
    getCommentById: getCommentById,
    getCommentsByMovieId: getCommentsByMovieId
}