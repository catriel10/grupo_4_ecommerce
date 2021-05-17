const express = require ("express");
const app = express ();
const path = require ("path");
const { pathToFileURL } = require("url");

app.use(express.static("public"))

app.listen (4444, ()=>{
console.log ("Mi servidor GRUPO 4 esta funcionando en port 4444")
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/src/home.html'));
});

app.get('/loginregistro', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/src/loginregistro.html'));
});
   

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/src/productDetail.html'));
});


app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/src/productCart.html'));
});
