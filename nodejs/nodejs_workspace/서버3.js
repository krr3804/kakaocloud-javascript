const http = require("http"); 
const url = require("url");
const fs = require("fs");

var server = http.createServer((request,response) => {

    var pathName = url.parse(request.url).pathname;
    if(pathName=="/") {
        response.writeHead(200,{"Content-type":"text/html"});
        response.end("<h1>Hello nodejs</h1>");
    } else if(pathName == "/test") {
        response.statusCode = 200; 
        response.setHeader("Content-type","text/html");
        response.end("<h1>Test</h1>");
    } else {
        response.statusCode = 200; 
        response.setHeader("Content-type","text/html");
        response.end("<h1>error</h1>");
    }
});

server.listen(3000,"127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
}); 

/*
문제1: http://127.0.0.1:3000/hello1?name=Jane -> Hello Jane!!!!
문제2: http://127.0.0.1:3000/add?x=10&y=7 -> 17
문제3: http://127.0.0.1:3000/gugu?dan=4 -> 4단 출력
문제4:  http://127.0.0.1:3000/rect?width=5&height=7 -> 사각형면적 35 
*/