const express = require('express');
const router = express.Router();
const Model = require('../models/contactModel');

router.post('/add', (req, res) => {
    const { name, email, message } = req.body;
    const contact = new Model({ name, email, message });
    contact.save()
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
            res.status(500).json(err);
        });
});


module.exports = router;