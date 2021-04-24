const express = require ("express");
const app = express ();
const path = require ("path");

app.listen (3030, ()=>{
console.log ("Mi servidor express esta funcionando en port 3030")
});

app.get('/', (req, res) => {
    res.sendFile (path.join (__dirname, "/views/index.html"))
});

app.get('/babbage', (req, res) => {
    res.sendFile (path.join (__dirname, "/views/babbage/babbage.html"))
});

app.get('/berners-lee', (req, res) => {
    res.sendFile (path.join (__dirname, "/views/berners-lee.html"))
});

app.get('/clarke', (req, res) => {
    res.sendFile (path.join (__dirname, "/views/clarke.html"))
});

app.get('/hamilton', (req, res) => {
    res.sendFile (path.join (__dirname, "/views/hamilton.html"))
});

app.get('/hopper', (req, res) => {
    res.sendFile (path.join (__dirname, "/views/hopper.html"))
});

app.get('/lovelace', (req, res) => {
    res.sendFile (path.join (__dirname, "/views/lovelace.html"))
});

app.get('/turing', (req, res) => {
    res.sendFile (path.join (__dirname, "/views/turing.html"))
});

app.use(express.static("public"))