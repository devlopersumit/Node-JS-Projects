const express = require('express');
const router = express.Router();

router.get('/error', (req, res, next) => {
    const err = new Error("Manual Error");
    next(err);
});

module.exports = router;