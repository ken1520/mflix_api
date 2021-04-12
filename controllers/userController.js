const { Router } = require('express');
const userProcessor = require('../processors/movie/userProcessor');

let router = new Router({ caseSensitive: true });

// router.get('/:movieId', userProcessor.getMovieById);

module.exports = router;