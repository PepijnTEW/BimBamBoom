const mongoose = require('mongoose');

const powerupSchema = mongoose.Schema({
    title: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Powerup', powerupSchema);