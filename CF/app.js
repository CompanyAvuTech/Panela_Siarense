const express = require("express");
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

app.use('/auth', authRouter);
app.use('/',indexRouter);
app.use('/produto',produtoRouter);
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});