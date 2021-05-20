const validator = require('validator');
const Comment = require('../../models/comment');
const apiResponse = require('../../utils/apiResponse');

let validate = (req, res, method) => {
    switch (method) {
        case 'getCommentsByMovieId':
            if (!validator.isMongoId(req.params.movieId)) {
                return apiResponse(req, res, 1008, []);
            }
            return true;
        case 'getCommentById':
            if (!validator.isMongoId(req.params.commentId)) {
                return apiResponse(req, res, 1008, []);
            }
            return true;
        case 'getCommentsByUserEmail':
            if (!validator.isEmail(req.params.email)) {
                return apiResponse(req, res, 1007, []);
            }
            return true;
    }
};

let getCommentById = async (req, res) => {
    try {
        if (validate(req, res, 'getCommentById')) {
            let resultComment = await Comment.find({ _id: req.params.commentId });
            apiResponse(req, res, resultComment.length > 0 ? 1001 : 1002, resultComment);
        }
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

let getCommentsByMovieId = async (req, res) => {
    try {
        if (validate(req, res, 'getCommentsByMovieId')) {
            let resultComments = await Comment.find({ movie_id: req.params.movieId });
            apiResponse(req, res, resultComments.length > 0 ? 1001 : 1002, resultComments);
        }
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

let getCommentsByUserEmail = async (req, res) => {
    try {
        if (validate(req, res, 'getCommentsByUserEmail')) {
            let resultComments = await Comment.find({ email: req.params.email });
            apiResponse(req, res, resultComments.length > 0 ? 1001 : 1002, resultComments);
        }
    } catch (error) {
        apiResponse(req, res, 1009, error);
    }
};

module.exports = {
    getCommentById: getCommentById,
    getCommentsByMovieId: getCommentsByMovieId,
    getCommentsByUserEmail: getCommentsByUserEmail
}