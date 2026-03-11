const mongoose = require('mongoose');
const Powerup = require('../models/powerup');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const powerups = [
    { title: "Change the letter" },
    { title: "Let someone skip a turn" },
    { title: "Get another try" }
];

const seed = async () => {
    await Powerup.deleteMany({});
    await Powerup.insertMany(powerups);
    console.log("Seeded powerups");
    mongoose.connection.close();
}

seed();