const mongoose = require('mongoose');
const Powerup = require('../models/powerup');
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const powerups = [
    { title: "Change the letter" },
    { title: "Let someone skip a turn" },
    { title: "Get another try" }
];

const seed = async () => {
    try {
        await Powerup.deleteMany({});
        await Powerup.insertMany(powerups);
        console.log("Seeded powerups");
    } catch(err) {
        console.log(err);;
    } finally {
        mongoose.connection.close();
    }
}

seed();