const { Schema, model } = require('../connection');

const chapterSchema = new Schema({
    title: {
        type: String,
        // required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    videoUrl: {
        type: String,
        trim: true
    },
    // order: {
    //     type: Number,
    //     required: [true, 'Chapter order is required']
    // }
});

const mySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: String,
        required: true,
        enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    },
    chapters: [chapterSchema]
}, { timestamps: true });

module.exports = model('courses', mySchema);
