const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    email: String,
    movie_id: Schema.Types.ObjectId,
    text: String,
    date: Date
});

module.exports = mongoose.model('comment', schema);