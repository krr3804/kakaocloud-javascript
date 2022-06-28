var express = require('express');

var app = express();
//본래의 callback 함수에는 세번째 인자로 next를 둔다
//next를 호출하지 않으면 해당 함수에서 작동을 멈춘다
app.use((req,res,next) => {
    req.name = "Brown";
    res.name = "John";
    console.log("첫번째 미들웨어");
    next();
});

app.use((req,res,next) => {
    req.phone = "010-0000-0001";
    res.phone = "010-0000-0002";
    console.log("두번째 미들웨어");
    next();
});

app.use((req,res,next) => {
    console.log("세번째 미들웨어");
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.write("<h1>" + req.name + "</h1>");
    res.write("<h1>" + res.name + "</h1>");
    res.write("<h1>" + req.phone + "</h1>");
    res.write("<h1>" + res.phone + "</h1>"); //end 함수가 호출되야 전송이 종료된다.

    res.end('<h1>Express Middleware</h1>');
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});