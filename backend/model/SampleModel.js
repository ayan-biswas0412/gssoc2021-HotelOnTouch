const mongoose = require('mongoose');

const SampleModel = mongoose.model('SampleModel', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    }
}));

module.exports = SampleModel; 