const express = require("express");
const Feedback = require("../models/FeedbackModel");

const router = express.Router();

// Route to submit feedback
router.post("/submit", async (req, res) => {
  try {
    const { userId, rating, feedbackType, feedbackText, isAnonymous } = req.body;

    const feedback = new Feedback({
      userId,
      rating,
      feedbackType,
      feedbackText,
      isAnonymous,
    });

    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully", feedback });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

// Route to get all feedback
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("userId", "name email");
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});

// Route to get feedback by user ID
router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const feedbacks = await Feedback.find({ userId });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedbacks for the user" });
  }
});

// Route to delete feedback by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Feedback.findByIdAndDelete(id);
    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete feedback" });
  }
});

module.exports = router;