var express = require('express');

var app = express();
app.use(express.urlencoded({extended:true}));

var boardRouter = express.Router(); //라우터 객체를 만든다
boardRouter.get("/list",(req,res) => {
    res.send("/board/list");
});

boardRouter.get("/write",(req,res) => {
    res.send("/board/write");
});

boardRouter.get("/view",(req,res) => {
    res.send("/baord/view");
});

//라우터 설정하기
app.use("/board", boardRouter); //url이 /board로 시작하는건 모두 boardRouter에게 보낸다
//boardRouter의 url은 자동으로 /board로부터 시작되서 /board/list, /board/write /board/view 형태로 된다.

app.use((req,res) => {
    res.status(404).send(`<h1>error</h>`);
})

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});