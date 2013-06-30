var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    var newFile = fs.createWriteStream('uploaded_file.txt');
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0;

    request.pipe(newFile);

    request.on('data', function(chunk) {
        uploadedBytes += chunk.length;
        var progress = (uploadedBytes / fileBytes) * 100;
        response.write("Progress: " + parseInt(progress, 10) + "%\n");
    });

    request.on('end', function(){
        response.writeHead(200);
        response.end('Uploaded!');
    });
}).listen(8080);

console.log("Listening on http://localhost:8080/ ...");
