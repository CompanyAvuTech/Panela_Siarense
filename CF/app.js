require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const produtoRouter = require('./routes/produto');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static('public'))
app.use('/static', express.static('public'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));


app.use('/auth', authRouter);
app.use('/',indexRouter);
app.use('/produto',produtoRouter);
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});