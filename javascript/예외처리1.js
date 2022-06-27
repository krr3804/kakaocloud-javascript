let j = '{"name":"john","age":32}';

try {
    let user = JSON.parse(j);
    console.log(user.name);
} catch (e) {
    console.log("데이터 에러 발생");
    console.log(e.message);
    console.log(e.name);
} finally {
    console.log("이구문은 에러여부와 상관없이 실행됩니다.");
}