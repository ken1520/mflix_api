const { Router } = require('express');
const commentProcessor = require('../processors/comment/commentProcessor');

let router = new Router({ caseSensitive: true });

router.get('/:commentId', commentProcessor.getCommentsById);
//router.get('/movie/:movieId', commentProcessor.getCommentByMovieId);

module.exports = router;