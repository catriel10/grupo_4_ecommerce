const fs = require('fs')
// Leemos el archivo (string)
const tareasJSON = fs.readFileSync(__dirname + '/tareas.json', 'utf-8')
//Este es el micro desafio 2
const tareasConvertidos = JSON.parse(tareasJSON)
//Este es el micro desafio 2
console.log (tareasJSON);
console.log (tareasConvertidos);

/*
let yargs = require('yargs') // importo la libreria
let comando = yargs.argv.comando //lee por consola --comando y asigna como valor lo que sigue
let titulo = yargs.argv.titulo //lee por consola --titulo y asigna como valor lo que sigue
let estado = yargs.argv.estado//lee por consola --estado y asigna como valor lo que sigue

console.log (comando);
console.log (titulo);
console.log (estado);*/