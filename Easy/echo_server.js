var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
//    request.on('data', function(chunk) {
//       response.write(chunk);
//    });
//
//    request.on('end', function(chunk) {
//       response.end();
//    });

    request.pipe(response);
}).listen(8080);

console.log("Listening on http://localhost:8080/ ...");
