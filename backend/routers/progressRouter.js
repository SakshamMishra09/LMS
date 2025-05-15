const express = require('express');
const router = express.Router();
const Progress = require('../models/progressModel');

// Mark a chapter as complete for a user in a course
router.post('/complete', async (req, res) => {
  try {
    const { userId, courseId, chapterId } = req.body;
    if (!userId || !courseId || !chapterId) {
      return res.status(400).json({ message: 'userId, courseId, and chapterId are required' });
    }
    let progress = await Progress.findOne({ userId, courseId });
    if (!progress) {
      progress = new Progress({ userId, courseId, completedChapters: [chapterId] });
    } else {
      if (!progress.completedChapters.includes(chapterId)) {
        progress.completedChapters.push(chapterId);
      }
      progress.updatedAt = Date.now();
    }
    await progress.save();
    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ message: 'Failed to mark chapter as complete', error: err.message });
  }
});

// Get completed chapters for a user in a course
router.get('/get/:userId/:courseId', async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const progress = await Progress.findOne({ userId, courseId });
    if (!progress) {
      return res.status(200).json({ completedChapters: [], overallProgress: 0 });
    }
    // Calculate overall progress percentage
    const course = await require('../models/courseModel').findById(courseId);
    const totalChapters = course?.chapters?.length || 0;
    const completed = progress.completedChapters.length;
    const overallProgress = totalChapters > 0 ? Math.round((completed / totalChapters) * 100) : 0;
    res.status(200).json({ completedChapters: progress.completedChapters, overallProgress });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch progress', error: err.message });
  }
});

module.exports = router;
