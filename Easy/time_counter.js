var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Time Counter \n");

    var getDateTimeFunction = function() {
        var date = new Date();

        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;

        var min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;

        var sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;

        var year = date.getFullYear();

        var month = date.getMonth() + 1;
        month = (month < 10 ? "0" : "") + month;

        var day  = date.getDate();
        day = (day < 10 ? "0" : "") + day;

        return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;

    };

    setInterval(function() {
        response.write("Now: " + getDateTimeFunction());
        response.end();
    }, 5000);
}).listen(8080);

console.log("Listening on 8080");


