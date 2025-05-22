const express = require('express');
const router = express.Router();
const Feedback = require('../models/FeedbackModel');

// Add feedback
router.post('/add', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    const saved = await feedback.save();
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all feedbacks
router.get('/getall', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('user').populate('course').sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get feedbacks for a specific course
router.get('/course/:courseId', async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ course: req.params.courseId }).populate('user').sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete feedback by id
router.delete('/delete/:id', async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Feedback deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;