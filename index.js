var http = require("http");

http.createServer(function(request,response){

    response.writeHead(200,{"Content-type":"text/plain"});

    response.end("Hola Node!");
}).listen(5000);

console.log('Servidor e la url http://127.0.0.1:5000');