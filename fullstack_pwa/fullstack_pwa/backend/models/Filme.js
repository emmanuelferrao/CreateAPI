const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Filme', filmeSchema);
