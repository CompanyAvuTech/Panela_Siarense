const express = require('express');
const router = express.Router();
const Coments = require("../models/Coments");
router.get('/commentopia', (req, res) => {
    res.render('commentopia');
});

module.exports = router;