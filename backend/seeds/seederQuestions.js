const mongoose = require('mongoose');
const Question = require('../models/question');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const questions = [
    { title: "What is your name?" },
    { title: "What is your favorite programming language?" },
    { title: "Where do you live?" }
];

const seed = async () => {
    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log("Seeded questions");
    mongoose.connection.close();
}

seed();