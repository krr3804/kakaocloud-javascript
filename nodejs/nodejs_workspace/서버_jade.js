const http = require("http"); 
const url = require("url");
const fs = require("fs");
const jade = require("jade");

var server = http.createServer((request,response) => {

    var pathName = url.parse(request.url).pathname;

    fs.readFile("./html/test2.jade","utf-8",(error, data) => {
        // console.log(data);
        var fn = jade.compile(data);

        response.statusCode = 200; 
        response.setHeader("Content-type","text/html");
        //html파일을 ejs엔진을 이용해 렌더링한다
        //ejs의 render의 첫번째 인자는 파일의 내용
        //두번째 인자는 JSON형태로 데이터를 전송한다
        //
        response.end(fn( {
            title : "Jade 엔진을 배워봅시다",
            contents : "JSON형태로 데이터를 보내주면 HTML과 결합하여 새로운 문서를 만든다",
            fruits : ["사과","배","거봉","포도","망고","참외","수박"],
            product : [
                {name:"노트북", price:2000},
                {name:"에어컨", price:4000},
                {name:"냉장고", price:3000},
                {name:"갤럭시", price:1000},
            ]
        }));
    })
    
});

server.listen(3000,"127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
}); 