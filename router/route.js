const express = require('express');
const router = express.Router();
const {insertContact} = require('../controller/contact');

router.get('/', function (req, res) {
    res.send('index')
});

router.get('/contact',insertContact);

module.exports = router;