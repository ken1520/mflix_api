const { Router } = require('express');
const commentProcessor = require('../processors/movie/commentProcessor');

let router = new Router({ caseSensitive: true });

router.get('/:commentId', commentProcessor.getCommentById);
router.get('/movie/:movieId', commentProcessor.getCommentByMovieId);

module.exports = router;