var http = require('http');

/* create a server object.
http.createServer(function(req, res){
    res.write("Hello Ved Bulsara");
    res.end(); //end the response.    
}).listen(3000);
*/

// To display the content as HTML.
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text-html'});
    res.write("Hello Ved Bulsara");
    res.end();
}).listen(3000);

