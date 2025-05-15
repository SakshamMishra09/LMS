const { Schema, model, Types } = require('../connection');

const progressSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'users', required: true },
  courseId: { type: Types.ObjectId, ref: 'courses', required: true },
  completedChapters: [{ type: String }], // store chapter _id as string
  updatedAt: { type: Date, default: Date.now }
});

module.exports = model('progresses', progressSchema);
