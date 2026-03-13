const express = require('express');
const router = express.Router();
const Powerup = require('../models/powerup');

router.get('/', async(req, res) => {
    try {
        const powerups = await Powerup.find();
        res.json(powerups); 
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/random', async(req, res) => {
    try {
        const powerup = await Powerup.aggregate([{ $sample: { size: 1 }}]);
        res.json(powerup[0]);
    } catch(err) {
        res.status(500).json({ error: err.message});
    }
});

module.exports = router;