const express = require ("express");
const { dirname } = require("path");
const app = express ();
const path = require ("path");

const port = process.env.PORT || 4444;

// definimos la carpeta que devuelve archivos estáticos
app.use(express.static(path.join(__dirname, '../public')))
/*
app.set("view engine", "ejs")
app.set("views", "./views")
*/
// definimos las vistas para ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen (port, ()=>{
console.log ("Mi servidor GRUPO 4 esta funcionando en port 4444")
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

/*
//detalle producto//
app.get('/productDetail', (req, res) => {
    res.render('productDetail');
});

/*
//Product Cart
app.get('/productCart', (req, res) => {
    res.render('productCart');
});

/*
//detalle producto//
app.get('/productDetail', (req, res) => {
    res.render('productDetail');
});
/*

/*
//detalle catalogo//
app.get('/catalogue', (req, res) => {
    res.render('catalogue');
});
*/

// products
const productsRoutes = require('./routes/productsRoutes');

app.use('/products', productsRoutes)
