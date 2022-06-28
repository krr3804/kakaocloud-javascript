const { query } = require('express');
var express = require('express');

var app = express();
app.use(express.urlencoded({extended:true}));
//초창기에는 body-parser 모듈 설치후 사용했는데 현재는 express가 모두 처리한다

//특정 url - 어떤 action이 짝이 될 것인가 - 라우터
/*
클라이언트로부터 정보를 보낼떄

get : 127.0.0.1:4000/a?x=4&y=7          request.query.x or request.query["x"]
새로운 get방식 127.0.0.1:4000/a/4/7     request.params["x"] or request.params.x
post - 미들웨어를 하나 연결한다
app.use(express.urlencoded({extended:true}))    request.body["키"]
*/

app.get("/a", (req,res,next) => {
    res.send("a입니다"); //writeHead + write + end. 들어오는 데이터에 맞추어서 적절히 데이터를 전송한다
})

app.get("/b", (req,res,next) => {
    res.send("b입니다");
})

app.get("/board/list", (req,res,next) => {
    res.send("보드입니다");
})

//새로운 방식으로 값을 받아보자
app.get("/a/:x/",(req,res,next) => {
    var x = req.params.x;
    res.send("받은값은 " + x + "입니다.");
})

//http://127.0.0.1:4000/a/4/5
app.get("/a/:x/:y",(req,res,next) => {
    var x = req.params.x;
    var y = req.params.y;
    res.send(`받은값은 ${x}와 ${y}입니다.`);
})

//http://127.0.0.1:4000/person?name=John&age=23&phone=010-0000-0001
app.get("/person",(req,res,next) => {
    console.log(
        `name : ${req.query.name}
        age : ${req.query.age}
        phone : ${req.query.phone}`
    );
    next();
});

app.get("/person",(req,res,next) => {
    req.query.name = "Steve";
    req.query.age = 28;
    req.query.phone = "010-5838-3804";
    res.send(
        `<h1>name : ${req.query.name} </h1>
        <h1>age : ${req.query.age} </h1>
        <h1>phone : ${req.query.phone} </h1>`
    );
});

app.post("/person",(req,res) => {
    res.send(
        `<h1>name : ${req.body.name} </h1>
        <h1>age : ${req.body.age} </h1>
        <h1>phone : ${req.body.phone} </h1>`)
})

//http://127.0.0.1:4000/person/Tom/11/010-0000-0002
app.get("/person/:name/:age/:phone",(req,res,next) => {
    res.send({
        'name' : req.params.name,
        'age' : req.params.age,
        'phone' : req.params.phone
    });
});

//http://127.0.0.1:4000/c?width=50&height=7
app.get("/c",(req,res,next) => {
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    res.send("Area of rectangle is " + width*height);
})

//http://127.0.0.1:4000/b/4/5
app.get("/b/:width/:height",(req,res,next) => {
    var width = parseInt(req.params.width);
    var height = parseInt(req.params.height);
    res.send(`Area of rectangle is ${width*height}.`);
})

app.use((req,res) => {
    res.status(404).send(`<h1>Error</h1>`);
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});