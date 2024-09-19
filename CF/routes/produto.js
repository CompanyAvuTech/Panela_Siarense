const express = require('express');
const router = express.Router();
const Receita = require('../models/Receita');
const User = require('../models/User');
const Coments = require('../models/Coments');
const mdbFunctionsDAO = require("../dao/mdb_functions");
router.get('/receita', (req, res) => {
  res.render('receita');
});
router.get('/receitas/:titulo', async (req, res) => {
  try {
    let titulo = req.params.titulo;
    const receita = await Receita.findOne({titulo: titulo })
    .populate({
      path: 'comentarios',
      populate: { path: 'usuario', select: 'name' } 
    });
    res.render('receitas', {receita} );
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
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/login');
};

router.post("/receitas/:titulo/comentarios", ensureAuthenticated,async (req, res) => {
 try {
  console.log('Request Body:', req.body);
  console.log('Recipe Title:', req.params.titulo);
    const titulo = req.params.titulo;
    const comentario = req.body.comentario;

     const receita = await Receita.findOne({ titulo: titulo });
     if (!receita) {
       return res.status(404).send('Recipe not found');
     }
     receita.comentarios.push({
       usuario: req.user ? req.user._id : null, // Use the logged-in user's ID, if available
       comentario: comentario
     });
 
     await receita.save(); 
    res.redirect(`/receitas/${encodeURIComponent(titulo)}`);
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).send('An error occurred while adding the comment');
  }
  });
  router.post("/receitas/:titulo/like", ensureAuthenticated, async (req, res) => {
    try {
      const receita = await Receita.findOne({ titulo: req.params.titulo });
      if (!receita) {
        return res.status(404).send("Recipe not found");
      }
      usuario: req.user ? req.user._id : null
      // Check if the user has already liked the recipe
      const userId = req.user._id;
      const hasLiked = receita.likes.includes(userId);
  
      if (hasLiked) {
        // If already liked, remove the like
        receita.likes = receita.likes.filter(id => id.toString() !== userId.toString());
      } else {
        // If not liked, add the like
        receita.likes.push(userId);
      }
  
      await receita.save();
      res.redirect(`/receitas/${encodeURIComponent(req.params.titulo)}`);
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred while processing the like.");
    }
  });
  

module.exports = router;