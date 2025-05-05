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
        const { userId } = req.params;
        const enrollments = await Model.find({ userId })
            .populate('courseId')
            .sort({ createdAt: -1 });

        // Transform the data to include course details
        const formattedEnrollments = enrollments.map(enrollment => ({
            _id: enrollment._id,
            course: enrollment.courseId,
            createdAt: enrollment.createdAt,
            updatedAt: enrollment.updatedAt
        }));

        res.json(formattedEnrollments);
    } catch (err) {
        console.error('Error fetching user enrollments:', err);
        res.status(500).json({ message: 'Error fetching enrolled courses' });
    }
});

module.exports = router;