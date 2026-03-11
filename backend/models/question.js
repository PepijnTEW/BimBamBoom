const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    title: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Question', questionSchema);