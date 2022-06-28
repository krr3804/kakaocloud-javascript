const cookieParser = require('cookie-parser');
var express = require('express');
//npm install = cookie-parser
var app = express();
app.use(express.urlencoded({extended:true}));
//쿠키 미들웨어 설정하기
app.use(cookieParser());

//쿠키-사용자공간(클라이언트컴퓨터)에 정보를 저장한다.
//세션-서버공간(서버컴퓨터에 로그온하면 계속 유지시켜준다.) - 세션저장소(디비랑 연결한다)
//response객체가 cookie라는 함수를 갖고 있고 이 함수를 통해 쿠키에 정보를 저장한다
app.use("/setCookie",(req,res) => {
    res.cookie("key1","test"); //키는 스트링이지만 값은 스트링말고 객체도 저장가능하다
    res.cookie("key2",{
        userid : "test1234",
        username : "홍길동"
    });
    res.end();
    //배열의 경우는 index를 통해서 이 index가 무조건 숫자다
    //map구조, json구조는 값을 숫자 인덱스가 아니라 문자열 인덱스로 검색한다
});

app.use("/getCookie",(req,res) => {
    //쿠키값을 읽을때는 클라이언트로부터 받아와야 하므로 request 객체를 통해 읽는다
    var key1 = req.cookies.key1;
    var key2 = req.cookies.key2;
    
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.write(key1);
    res.write(`${key2.userid} ${key2.username}`);
    res.end();
});

app.use((req,res) => {
    res.status(404).send(`<h1>Error</h1>`);
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});