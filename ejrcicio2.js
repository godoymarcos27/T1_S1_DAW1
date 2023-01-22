var http = require('http');
var url = require('url');



http.createServer(function (req, res) {

var q = url.parse(req.url, true)
var qdata= q.query
res.writeHead(200, {'Content-Type': 'text/html'});
let numero1 = parseFloat(qdata.num1) 
let  doble_del_num1 = numero1 * 2;
let  triple_del_num1 = numero1 * 3;
res.write("Numero ingresado es = " + qdata.num1 );
res.write("<br>" );
res.write( "El doble del numero ingresado es = " + doble_del_num1 );
res.write("<br>" );
res.write( "El triple del numero ingresado es = " + triple_del_num1)


res.end()
}).listen(4000);