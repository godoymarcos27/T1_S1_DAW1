var http = require('http');
var url = require('url');



http.createServer(function (req, res) {

var q = url.parse(req.url, true)
var qdata= q.query
res.writeHead(200, {'Content-Type': 'text/html'});
let result1 = parseFloat(qdata.num1) * parseFloat(qdata.num2)

let result2 = parseFloat(qdata.num1) / parseFloat(qdata.num2)
res.write(qdata.num1 + "  x  " + qdata.num2 + "=" + result1)
res.write("<br>" );
res.write(qdata.num1 + "  /  " + qdata.num2 + "=" + result2)
res.end()
}).listen(8080);