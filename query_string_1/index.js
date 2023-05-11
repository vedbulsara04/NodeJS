var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Conteny-Type':'text/html'});
    res.write(req.url);
    res.end();
}).listen(3000);
