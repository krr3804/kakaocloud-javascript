const http = require("http");
const url = require("url");
const fs = require("fs");

var server = http.createServer((req,res) => {
     var pathName = url.parse(req.url).pathname;
     
     if(pathName == '/hello') {
        var query = url.parse(req.url, true).query;
        var name = query.name;
        res.writeHead(200,{'Content-type' : 'text/html'});
        res.end(hello(name));
     } else if(pathName == '/add') {
        var query = url.parse(req.url, true).query;
        var x = parseInt(query.x);
        var y = parseInt(query.y);
        res.writeHead(200,{'Content-type' : 'text/html'});
        res.end(`<h1>${x} + ${y} = ${(x + y)} </h1>`);
     } else if(pathName == '/gugu') {
        var query = url.parse(req.url, true).query;
        var dan = parseInt(query.dan);
        res.writeHead(200,{'Content-type' : 'text/html'});
        res.end(gugu(dan));
     } else if(pathName == '/rect') {
        var query = url.parse(req.url, true).query;
        var width = parseInt(query.width);
        var height = parseInt(query.height);
        res.writeHead(200,{'Content-type' : 'text/html'});
        res.end("<h1>" +width*height + "</h1>");
     } else if(pathName == '/calc') {
        var query = url.parse(req.url, true).query;
        var data = fs.readFileSync("./html/calc.html","utf-8");
        
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(data);
     }
});

server.listen(3000,"127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
});

function hello(name) {
    return "<h1> Hello " + name + "</h1>";
}

function gugu(number) {
    var res = "";
    for(i = 1; i<=9; i++) {
        res += "<h1>" +number*i + "</h1>";
    }
    return res;
}