const mongoose = require('mongoose');

const schema = mongoose.Schema({
    plot: String,
    genres: Array,
    runtime: Number,
    cast: Array,
    num_mflix_comments: Number,
    poster: String,
    title: String,
    lastupdated: String,
    langauges: Array,
    released: Date,
    directors: Array,
    rated: String,
    awards: Object,
    year: Number,
    imdb: Object,
    countries:Array,
    type: String,
    tomatoes: Object
});

module.exports = mongoose.model('movie', schema);