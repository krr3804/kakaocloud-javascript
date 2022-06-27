
let abs = function abs(number) {
    if(number>0) {
        return number;
    } else {
        return -number;
    }
}

let isLeap = function isLeap(s) {
   if(s%4==0 && s%100!=0 || s%400==0) {
    return true;
   } else {
    return false;
   }
}

function hello() {
    return "hello nodejs";
}

exports.abs = abs;
exports.isLeap = isLeap;
exports.test = hello;

//exports는 함수를 외부로 내보낸다.
//외부로 내보낼때 exports.키 = 함수명

//외부로 모듈을 노출시켜야 다른 모듈에서 이 모듈에 대한 접근이 가능하다
// module.exports = abs;
// module.exports = isLeap;
