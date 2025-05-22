const { Schema, model } = require('../connection');

const feedbackSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: false
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'courses',
    required: false
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  type: {
    type: String,
    enum: ['general', 'course', 'platform', 'technical', 'suggestion'],
    default: 'general',
    required: true
  },
  feedback: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback = model('Feedback', feedbackSchema);
module.exports = Feedback;