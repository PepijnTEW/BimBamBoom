const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express(); 

require('dotenv').config();

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
app.use('/', questionRouter);

const powerupRouter = require('./routes/powerup');
app.use('/', powerupRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server runs on port: ${PORT}`));