const express = require ("express");
const { dirname } = require("path");
const app = express ();
const path = require ("path");

const port = process.env.PORT || 4444;

// definimos la carpeta que devuelve archivos estáticos
app.use(express.static(path.join(__dirname, '../public')))

app.listen (port, ()=>{
console.log ("Mi servidor GRUPO 4 esta funcionando en port 4444")
});

// Home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

// Login/Register
app.get('/loginRegister', (req, res) => {
    res.sendFile(path.join(__dirname, './views/loginRegister.html'));
});

// Register
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

// Login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

// Product Cart
app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'));
});

// products
const productsRoutes = require('./routes/productsRoutes');

app.use('/products', productsRoutes)
