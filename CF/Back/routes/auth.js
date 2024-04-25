const express = require('express');
const router = express.Router();
const User = require("../models/User");


router.get('/signup', (req, res) => {
    res.render('signup');
});
router.get('/login', (req, res) => {
    res.render('login')
});
router.get('/altsenha', (req, res) => {
    res.render('altsenha')
});
router.get('/esqsenha', (req, res) => {
    res.render('esqsenha')
});
router.post('/signup', async (req, res) => {
    const data = {
        name: req.body.name,
        username:req.body.username,
        password: req.body.password

    };

    try {
        const checking = await User.findOne({ name: req.body.name });

        if (checking && checking.password === req.body.password) {
            return res.send("Este user já existe");
        }

        await User.insertMany([data]);
        res.status(201).render("login", { naming: req.body.name });
    } catch (error) {
        console.error("Erro ocorreu a criar conta:", error);
        res.send("Erro ocorreu a criar conts");
    }
});

router.post('/login', async (req, res) => {

    try {
        const check = await User.findOne({ username: req.body.username });

        if (check && check.password === req.body.password) {
            return res.status(201).render("index", { naming: `${req.body.password}+${req.body.username}` });
        } else {
            return res.send("Senha errada");
        }
    } catch (error) {
        console.error("Um erro ocorreu ao tentar logar:", error);
        res.send("detalhes errados");
    }
});
router.post('/altsenha', async (req, res) => {

    try {
        await User.findByIdAndUpdate(req.params.id, {
           password:req.body.password
          });
        res.status(201).render(`login/${req.params.id}`);
    } catch (error) {
        console.error("Erro ocorreu a criar conta:", error);
        res.send("Erro ocorreu a criar conts");
    }
});


module.exports = router;


