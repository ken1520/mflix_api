const movieController = require('./movieController');

module.exports = (app) => {
    console.log('controller');
    app.use('/api/movies', movieController);
}