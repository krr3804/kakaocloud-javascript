var fs = require("fs");

//비동기모드는 try~catch문이 안먹힘
// try {
//     fs.readFile("./mymodule.js","utf-8",(error,data) => {
//         console.log(data);
//     });
// } catch(e) {
//     console.log(e);
// }

fs.readFile("./mymodule1.js","utf-8",(error,data) => {
    if(error) { //error가 있을때 객체가 만들어져서 전달됨
        console.log(error);
        return;
    }
    console.log(data);
});

console.log("종료...................");