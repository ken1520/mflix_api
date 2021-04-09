const { Router } = require('express');
const movieProcessor = require('../processors/movie/movieProcessor');

let router = new Router({ caseSensitive: true });

router.get('/:movieId', movieProcessor.getMovieById);

module.exports = router;