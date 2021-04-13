const mongoose = require('mongoose');

const schema = mongoose.Schema({
    user_id: String,
    jwt: String
});

module.exports = mongoose.model('session', schema);