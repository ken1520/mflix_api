const movieController = require('./movieController');

module.exports = (app) => {
    app.use('/api/movies', movieController);
}