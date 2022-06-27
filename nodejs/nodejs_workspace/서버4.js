const http = require("http"); 
const url = require("url");
const fs = require("fs");

var server = http.createServer((request,response) => {

    var pathName = url.parse(request.url).pathname;
    if(pathName=="/image") {
        fs.readFile("./images/salad.jpg",(error,data) => {
            if(error) {
                response.writeHead(200,{"Content-type" : "text/html"});
                response.end("<h1>file is not found</h1>");
                return;
            }
            response.writeHead(200,{'Content-type':'image/jpeg'});
            response.end(data);
        })
    }

    else if(pathName=="/media") {
        fs.readFile("./medias/salad.mp4",(error,data) => {
            if(error) {
                response.writeHead(200,{"Content-type" : "text/html"});
                response.end("<h1>file is not found</h1>");
                return;
            }
            response.writeHead(200,{'Content-type':'video/mp4'});
            response.end(data);
        })
    }
});

server.listen(3000,"127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
}); 