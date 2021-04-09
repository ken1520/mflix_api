const movieController = require('./movieController');
const commentController = require('./commentController');

module.exports = (app) => {
    app.use('/api/movies', movieController);
    app.use('/api/comments', commentController);
}