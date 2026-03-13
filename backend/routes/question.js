const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/', async(req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions); 
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/random', async(req, res) =>{
    try {
        const question = await Question.aggregate([{ $sample: { size: 1 }}]);
        res.json(question[0]);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;