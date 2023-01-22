var http = require('http');
var url = require('url');
// var fs = require('fs');


http.createServer(function (req, res) {

// var name= "marcos"
var q = url.parse(req.url, true)
var qdata= q.query
res.writeHead(200, {'Content-Type': 'text/html'});

res.write("Hola " + qdata.nameuser + " Bienvenido/a")
res.end()
}).listen(3030);