const express = require("express");
const Course = require("../models/courseModel");

const router = express.Router();

// Route to add a new course
router.post("/add", async (req, res) => {
  try {
    const { title, description, image, category, level, price, language, duration, chapters } = req.body;

    const newCourse = new Course({
      title,
      description,
      image,
      category,
      level,
      price,
      language,
      duration,
      chapters, // Include chapters in the course
    });

    await newCourse.save();
    res.status(201).json({ message: "Course added successfully", course: newCourse });
  } catch (error) {
    res.status(500).json({ error: "Failed to add course" });
  }
});

router.get('/getall', (req, res) => {
    Course.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);

        });
});

// : denotes url parameter
router.get('/getbyemail/:email', (req, res) => {
    res.send('response from user getbyemail');


});

router.delete('/delete/:id', (req, res) => {
    Course.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });
});

// Add this route handler
router.get('/getbyid/:id', (req, res) => {
    Course.findById(req.params.id)
        .then((result) => {
            if(!result) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update course by ID
router.put('/update/:id', async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to update course' });
    }
});

module.exports = router;