const { Schema, model } = require('../connection');

const mySchema = new Schema({
    title: String,
    description: String,
    image: String,
    category: String,
    level: String,
    price: { type: String },
    language: { type: String },
    duration: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = model('courses', mySchema);
