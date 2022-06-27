const http = require("http"); //외부모듈을 이 파일로 불러온다
const fs = require("fs");
const url = require("url");
const querystring = require("querystring"); //현재는 폐기된 라이브러리
//POST로 온 데이터 처리

var server = http.createServer((request,response) => {
    var pathName = url.parse(request.url).pathname;
    //http://localhost:3000?name=Tom&age=23
    if(request.method == "GET" && pathName =="/") { //get방식일때
        // console.log(request);
        var query = url.parse(request.url, true).query; //쿼리를 파싱해서 json으로 수정
        console.log(query);
        console.log(query["name"], query.age);
        var data = fs.readFileSync("./html/index.html","utf-8");
        
        response.writeHead(200,{"Content-type":"text/html"});
        response.end(data);
    }
    else if(request.method="POST" && pathName == "/") {
        //폐기상황 - 새로운 버전으로 바꿔보자
        // request.on("data",(data) => {
        //     var result = querystring.parse(data.toString());
        //     console.log(result.username, result.age);
        //     response.statusCode=200;
        //     response.setHeader("Content-type","text/html");``
        //     response.end('<h1>'+ data + '</h1>');
        // })

        let body = "";
        request.on("data", (data) => {
            body += data;
        });
        request.on("end",() => {
            let postData = new URLSearchParams(body);
            console.log(postData);
            console.log(postData.get("username"), postData.get("age"));

            response.setHeader("Content-type","text/html");
            response.end(`<h1>${postData.get("username")} ${postData.get("age")} </h1>`); 
        })
    }
   
})

server.listen(3000,"127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
}); // 3000번 포트를 열어라