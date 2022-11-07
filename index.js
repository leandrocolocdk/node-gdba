// var http = require("http");

// http.createServer(function(request,response){

//     response.writeHead(200,{"Content-type":"text/plain"});

//     response.end("Hola Node!");
// }).listen(5000);

// console.log('Servidor e la url http://127.0.0.1:5000');

// Servidor sin express

var express = require('express');
var app = express();

// -------------- CONFIGURACIONES --------------

app.use(express.json()); // permite que express entienda json
app.use(express.urlencoded({ extended: true })); // permite que express entienda formularios enviados por post

app.get('/', function (req, res) {
    res.send('Hola Mundo desde express.');
})

app.get('/:nombre', function (req, res) {
    res.send('Hola '+ req.params.nombre);
})

app.post('/', function (req, res) {
    res.send('Hola '+ req.body.nombre);
})

app.listen(3000, function () {
    console.log("Aplicacion de ejemplo, escuchando puerto 3000");
})