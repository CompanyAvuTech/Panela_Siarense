const express = require('express');
const router = express.Router();
const mdbFunctionsDAO = require("../dao/mdb_functions");
router.get('/insertReceita', (req, res) => {
    res.render('insertReceita');
});
router.get('/receitas', (req, res) => {
    res.render('receitas');
});
router.get('/receita', (req, res) => {
    res.render('receita');
});
module.exports = router;