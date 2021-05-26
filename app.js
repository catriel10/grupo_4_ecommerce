const express = require ("express");
const app = express ();
const path = require ("path");
const { pathToFileURL } = require("url");

const port = process.env.PORT || 4444;

app.use(express.static("public"))

app.listen (port, ()=>{
console.log ("Mi servidor GRUPO 4 esta funcionando en port 4444")
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/home.html'));
});

app.get('/loginregistro', (req, res) => {

    res.sendFile(path.join(__dirname, '/src/views/loginregistro.html'));
});

app.get('/loginRegister', (req, res) => {

    res.sendFile(path.join(__dirname, '/src/views/loginRegister.html'));
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/productDetail.html'));
});


app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/productCart.html'));
});
