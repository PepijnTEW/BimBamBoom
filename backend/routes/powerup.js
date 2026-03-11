const express = require('express');
const router = express.Router();
const Powerup = require('../models/powerup');

router.get('/powerups', async(req, res) => {
    const powerups = await Powerup.find();
    res.json(powerups); 
});

module.exports = router;