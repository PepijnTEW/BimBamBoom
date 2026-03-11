const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); require('dotenv').config();
const app = express(); 

app.use(cors()); 
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Welcome to the BimBamBoom Api');
});

//Routes from folder ./routes
const questionRouter = require('./routes/question');
app.use('/questions', questionRouter);

const powerupRouter = require('./routes/powerup');
app.use('/powerups', powerupRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server runs on port: ${PORT}`));