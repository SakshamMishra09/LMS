const { Schema, model } = require('../connection');

const mySchema = new Schema({
    title: String,
    price: { type: String, unique: true },
    duration: { type: String, required: true },
    createadAt: { type: Date, default: Date.now }
});

module.exports = model('course', mySchema);
