const express = require('express');
const router = express.Router;
const Question = require('../models/question');

router.get('/questions', async(req, res) => {
    const questions = await Question.find();
    res.json(questions); 
});

module.exports = router;