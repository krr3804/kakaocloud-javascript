const http = require("http"); 
const url = require("url");
const fs = require("fs");

var server = http.createServer((request,response) => {

    var pathName = url.parse(request.url).pathname;
    response.statusCode = 200; 
    response.setHeader("Content-type","text/html");
    response.end("<h1>Hello nodejs</h1>");
});

server.listen(3000,"127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
}); 