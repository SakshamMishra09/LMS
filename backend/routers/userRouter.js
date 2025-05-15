const express = require('express');
const router = express.Router();
const Model = require('../models/UserModel');
const jwt = require('jsonwebtoken');

router.post('/add', (req, res) => {
    // Ensure role is set to 'student' or 'user', default to 'student' if invalid or missing
    let { name, email, password, role } = req.body;
    if (!role || !['student', 'company'].includes(role)) {
        role = 'student';
    }
    const user = new Model({ name, email, password, role });
    user.save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            // Handle duplicate email error
            if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
                res.status(400).json({ message: 'Email already exists' });
            } else {
                res.status(500).json(err);
            }
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
router.get('/getbyemail/:email', (req, res) => {
    res.send('response from user getbyemail');


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

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
    .then((result) => {

        if (result) {
            // login success - generate token

            const{ _id, name, email, role } = result;
            const payload = { _id, name, email, role };

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '2d'},
                (err, token) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json(err);
                    } else {
                        res.status(200).json({ token, role });
                    }
                }
            )

        } else {
            // login failed - send error message
            res.status(401).json({ message: 'Invalid credentials' });
        }
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
        
    });

module.exports = router;