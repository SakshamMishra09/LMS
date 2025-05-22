require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB_URl

// asynchoruns fumction - returns promise
mongoose.connect(url)
    .then((result) => {
        console.log('database connected')
    })
    .catch((err) => {
        console.log(err);
    });

// console.log('other statement');

module.exports = mongoose;