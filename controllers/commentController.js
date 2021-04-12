const { Router } = require('express');
const commentProcessor = require('../processors/comment/commentProcessor');

let router = new Router({ caseSensitive: true });

router.get('/:commentId', commentProcessor.getCommentById);
router.get('/movie/:movieId', commentProcessor.getCommentsByMovieId);
router.get('/email/:email', commentProcessor.getCommentsByUserEmail);

module.exports = router;