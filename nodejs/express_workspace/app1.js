var express = require('express');

var app = express();

app.get("/test",(req,res) => {
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(`<h1>Get Test</h1>`);
});

app.post("/test",(req,res) => {
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(`<h1>Post Test</h1>`);
});

app.get("/data",(req,res) => {
    res.send({name:"홍길동",age:12,phone:"010-0000-0001"});
});

app.get("/msg",(req,res) => {
    res.send("<h1>안녕하세요 express입니다.");
});

app.use((req,res) => {
    res.status(404).send(`<h1>Error</h1>`);
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});