const express = require('express');
const router = express.Router();
const Model = require('../models/enrollModel');


router.post('/add', (req, res) => {
    const { userId, courseId } = req.body;

    // Validate input
    if (!userId || !courseId) {
        return res.status(400).json({ message: 'userId and courseId are required' });
    }

    // Save the enrollment
    new Model({ userId, courseId }).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);

        });
});

// : denotes url parameter
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            if(!result) {
                return res.status(404).json({ message: 'No enrollment with this ID' });
            }
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Add route to check enrollment status
router.get('/checkstatus/:userId/:courseId', async (req, res) => {
    try {
        const { userId, courseId } = req.params;
        const enrollment = await Model.findOne({ userId, courseId });
        res.json({ enrolled: !!enrollment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error checking enrollment status' });
    }
});

// Add route to get enrolled courses for a user
router.get('/user/:userId', async (req, res) => {
    try {
        const enrollments = await Model.find({ userId: req.params.userId }).populate('courseId');
        res.status(200).json(enrollments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch enrolled courses" });
    }
});

module.exports = router;