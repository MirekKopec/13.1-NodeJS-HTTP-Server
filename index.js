var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.method === 'GET' && request.url === '/') {

        fs.readFile('./app/index.html', 'utf-8', function(err, data) {
            if (err) throw err; 
            response.write(data);
            response.end();
        });

    } else if (request.method === 'GET' && request.url === '/style.css') {

        response.setHeader("Content-Type", "text/css");

        fs.readFile('./app/style.css', 'utf-8', function(err, data) {
           if (err) throw err; 
           response.write(data);
           response.end();
        });

    } else {
            response.statusCode = 404;

            response.setHeader("Content-Type", "image/jpeg");
            
            fs.readFile('./img/404.jpg', function(err, data) {
                if (err) throw err; 
                response.write(data);
                response.end();
            });
        }

});

server.listen(8080);