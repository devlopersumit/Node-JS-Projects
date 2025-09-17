const express = require("express");
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/dashboard', auth, (req, res) => {
    res.json({msg:"Welcome to your dashboard!"});
});

module.exports = router;