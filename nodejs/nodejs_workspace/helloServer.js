const http = require("http"); //외부모듈을 이 파일로 불러온다

http.createServer((request,response) => {
    //클라이언트로부터 연결 요청이 오면 이 함수가 호출된다.
    response.statusCode = 200; //클라이언트에게 연결 요청이 성공했음을 알림
    response.setHeader("Content-type","text/html"); //보내는 정보가 html임을 알림
    response.end("<h1>Hello nodejs</h1>");
}).listen(3000,"127.0.0.1", () => {
    console.log("Server start at http://127.0.0.1:3000");
}); // 3000번 포트를 열어라