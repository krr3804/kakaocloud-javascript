const http = require("http"); //외부모듈을 이 파일로 불러온다
const fs = require("fs");
const url = require("url");

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
        //request객체의 이벤트 리스너를 붙여야한다
        request.on("data",(data) => {
            response.statusCode=200;
            response.setHeader("Content-type","text/html");``
            response.end('<h1>'+ data + '</h1>');
        })
    }
   
})

server.listen(3000,"127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
}); // 3000번 포트를 열어라