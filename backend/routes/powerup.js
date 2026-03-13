const express = require('express');
const router = express.Router();
const Powerup = require('../models/powerup');

router.get('/', async(req, res) => {
    const powerups = await Powerup.find();
    res.json(powerups); 
});

router.get('/random', async(req, res) => {
    const powerup = await Powerup.aggregate([{ $sample: { size: 1 }}]);
    res.json(powerup[0]);
});

module.exports = router;