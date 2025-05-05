const { Schema, model } = require('../connection');

const mySchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'users' },
    title: String,
    description: String,
    image: String,
    category: String,
    level: String,
    price: { type: String },
    duration: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('courses', mySchema);
