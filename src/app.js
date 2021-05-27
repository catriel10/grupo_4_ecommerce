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

// Login /Register
app.get('/loginRegister', (req, res) => {
    res.sendFile(path.join(__dirname, './views/loginRegister.html'));
});

// products
const productsRoutes = require('./routes/products');

app.use('/products', productsRoutes)
