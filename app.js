const express = require ("express");
const app = express ();
const path = require ("path");

app.use(express.static("public"))

app.listen (4444, ()=>{
console.log ("Mi servidor GRUPO 4 esta funcionando en port 4444")
});


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '/views/src/login.html'));
    });

    res.sendFile(path.join(__dirname + '/views/src/index.html'));
    

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/src/productDetail.html'));
});

