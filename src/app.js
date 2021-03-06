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
const session = require('express-session')
const config = require('./config/config')
const cors = require('cors')

// middlewares

app.use(session({
    secret: "config.sessionSecret",
    resave: false,
    saveUninitialized: false,
  }))

  app.use(cors())
  app.use(cookieParser())
  
  const cookiesSessionMiddleware = require('./middlewares/cookiesSessionMiddleware')
  const sessionToLocals = require('./middlewares/sessionToLocals')
  const notFoundMiddleware = require('./middlewares/notFound')
  
  app.use(cookiesSessionMiddleware)
  app.use(sessionToLocals)

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

//Levantamos el Servidor
app.listen (port, ()=>{
    console.log ("Mi servidor GRUPO 4 esta funcionando en port 4444")
    });


// Home
app.get('/', (req, res) => {
    res.render('home')
});

// users
const usersRoutes = require('./routes/usersRoutes');

app.use('/users', usersRoutes)
  
// products
const productsRoutes = require('./routes/productsRoutes');


app.use('/products', productsRoutes)


// api
const apiRoutes = require('./routes/api')
app.use('/api', apiRoutes)


// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});

app.use(notFoundMiddleware)

module.exports = app;