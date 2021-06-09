// Declaramos las variables
const express = require('express') // trae el modulo de express para poder montar el servidor
const { dirname } = require("path");
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const method = require('method-override');
const app = express ();
const path = require ("path"); //requiere el modulo nativo path de node
const port = process.env.PORT || 4444;

// Indica a express la ruta que contiene los recursos estaticos  para consumir de manera sencilla
app.use(express.static(path.join(__dirname, '../public')));

// definimos las vistas para ejs
app.set('views', path.join(__dirname, 'views'));  //indica al template engine donde buscar las vistas//
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(method('_method'));
app.use(logger('dev'));  
module.exports = app;

//Levantamos el Servidor
app.listen (port, ()=>{
    console.log ("Mi servidor GRUPO 4 esta funcionando en port 4444")
    });
/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
next(createError(404));
});*/

// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});

// Home
app.get('/', (req, res) => {
    res.render('home')
});

// Register
app.get('/register', (req, res) => {
    res.render('register')
});

// Login
app.get('/login', (req, res) => {
    res.render('login')
});
  
// products
const productsRoutes = require('./routes/productsRoutes');

app.use('/products', productsRoutes)