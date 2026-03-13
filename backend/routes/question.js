const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/all', async(req, res) => {
    const questions = await Question.find();
    res.json(questions); 
});

router.get('/random', async(req, res) =>{
    const question = await Question.aggregate([{ $sample: { size: 1 }}]);
    res.json(question[0]);
});

module.exports = router;