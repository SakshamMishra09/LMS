const express = require('express');
const router = express.Router();
const Model = require('../models/UserModel');
const jwt = require('jsonwebtoken');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
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

            const{ _id, name, email } = result;
            const payload = { _id, name, email };

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '2d'},
                (err, token) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json(err);
                    } else {
                        res.status(200).json({token });
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