const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome to middleware playground");
});

router.get('/public', (req, res) => {
    res.send("This is a public route");
});

module.exports = router;