
const passport = require('passport');
const express = require('express');
const router = express.Router();
const User = require("../models/User");
  
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findById(id).exec();
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

  
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3300/auth/google/callback",
    passReqToCallback: true,
  },

  async function(request, accessToken, refreshToken, profile, cb) {
      try {
        const userProfile = {
          googleId: profile.id,
          name: profile.displayName,
          photo: profile.photos[0].value,
          username: profile.emails[0].value
        };
    
        const result = await User.findOrCreate(
          { googleId: profile.id },
          userProfile
        );
        const user = result.doc || result;
        return cb(null, user);
      } catch (err) {
        console.error("Error finding or creating user:", err);
        return cb(err, null);
      }
  }));


router.get('/signup', (req, res) => {
  res.render('signup');
});
router.get('/login', (req, res) => {
  res.render('login')
});

  router.get('/google',
    passport.authenticate('google', { scope: [ 'profile','email' ] }
  ));
  
 router.get( '/google/callback',
    passport.authenticate( 'google',  {
      failureRedirect: '/auth/login'
    }),
    function(req, res) {
        // Successful authentication, redirect secrets page.
        res.redirect("/");
      });
router.post('/signup', async (req, res) => {
  try {
    const registerUser = await User.register({username: req.body.username, name:req.body.name}, req.body.password);
    if(registerUser){
      // if user registered, we will authenticate the user using passport
      passport.authenticate("local")(req,res,function(){
        res.redirect("/"); 
      });
    }else{
      res.redirect("/signup");
    }
  }catch(err){
    console.log(err)
    res.send("Error: " + err.message);
  }
});

   

router.post('/login', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
      });

      req.login(user, (err)=>{
        if(err){
          console.log(err);
        }else{
          passport.authenticate("local")(req, res, ()=>{
            res.redirect("/")
          });
        }
      });
    });
    
router.get("/logout", (req, res)=>{
    //use passport logout method to end user session and unauthenticate it
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });


router.get('/profile', async (req, res) => {
  if(req.isAuthenticated()){
    const user = await User.findById(req.user.id);
    res.render('profile',{user:user});
  }else{
    res.redirect("/auth/login");
  }
  });
  router.get('/changePassword', async (req, res) => {
    if(req.isAuthenticated()){
      res.render('changePassword');
}else{
      res.redirect("/auth/login",);
    }
    });

    router.post('/changePassword', function (req, res) {
      User.findByUsername(req.body.username, (err, user) => {
          if (err) {
              res.send(err);
          } else {
              user.changePassword(req.body.oldpassword, 
              req.body.newpassword, function (err) {
                  if (err) {
                      res.send(err);
                  } else {
                      res.redirect("/auth/profile")

                  }
              });
          }
      });
   });
       
module.exports = router;