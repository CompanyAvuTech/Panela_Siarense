const express = require('express');
const router = express.Router();
const Receita = require('../models/Receita');
const User = require('../models/User');
const Coments = require('../models/Coments');
const mdbFunctionsDAO = require("../dao/mdb_functions");
router.get('/receita', (req, res) => {
  res.render('receita');
});
router.get('/receitas', (req, res) => {
  res.render('receitas');
});

router.post('/receitas', async (req, res) => {
  try {
   // let recipeId = req.params.id;
   // const receita = await Receita.findById(recipeId);
    res.render('receita');
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get('/Metropolitana',async (req, res) => {
  try {
    const limitNumber = 3;
    const metropolitana = await Receita.find({ 'regiao': 'Metropolitana' }).limit(limitNumber);
    res.render('Metropolitana',{metropolitana});
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/Noroeste',async (req, res) => {
  try {
    const limitNumber = 3;
    const noroeste = await Receita.find({ 'regiao': 'Noroeste' }).limit(limitNumber);
    res.render('Noroeste',{noroeste});
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get('/Sertoes',async (req, res) => {
  try {
    const limitNumber = 3;
    const sertoes = await Receita.find({ 'regiao': 'Sertões' }).limit(limitNumber);
    res.render('Sertoes',{sertoes});
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get('/Norte',async (req, res) => {
  try {
    const limitNumber = 3;
    const norte = await Receita.find({ 'regiao': 'Norte' }).limit(limitNumber);
    res.render('Norte',{norte});
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get('/Centrosul',async (req, res) => {
  try {
    const limitNumber = 3;
    const centrosul = await Receita.find({ 'regiao': 'Centro-sul' }).limit(limitNumber);
    res.render('Centrosul',{centrosul});
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get('/Sul',async (req, res) => {
  try {
    const limitNumber = 3;
    const sul = await Receita.find({ 'regiao': 'Sul' }).limit(limitNumber);
    res.render('Sul',{sul});
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get('/Jaguaribe',async (req, res) => {
  try {
    const limitNumber = 3;
    const jaguaribe = await Receita.find({ 'regiao': 'Jaguaribe' }).limit(limitNumber);
    res.render('Jaguaribe',{jaguaribe});
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get('/search', (req, res) => {
  res.render('search');
});
router.post('/search',async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let receitas = await Receita.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
    res.render('search',{receitas});
  } catch (err) {
    res.status(500).send(err);
  }
});

/*router.post("/receitas/coments", async (req, res) => {
    try {
        const coments = new Coments({
          conteudo:req.body.conteudo,
          username:req.body.username
        });
        await Coments.Create(coments);
        res.redirect('receitas');
    } catch (err) {
      res.status(500).send(err);
    }
  });

/*router.get("/receitas/coments", (req, res)=>{
  if(req.isAuthenticated()){
    res.render("coments");
  }else{
    res.redirect("/auth/login");
  }
});
  router.post("/receitas/coments", async (req, res) => {
    try {
        const coments = new Coments({
          conteudo:req.body.conteudo,
          username:req.body.username
        });
        await Coments.Create(coments);
        res.redirect('receitas');
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  router.post("/receitas/like", async (req, res)=>{
    try{
      const findComents = await Coments.findById(req.body.likesBtn);
      const updateComentsLikes = await findComents.updateOne({likes: findComents.likes+1});
      res.redirect("/receitas");
  
    }catch(err){
      res.send(err);
    }
  })*/

module.exports = router;