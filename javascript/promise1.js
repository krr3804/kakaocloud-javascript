let promise = new Promise(function(resolve,reject) {
    let data ={"name":"홍길동","age":34,"phone":"010-0000-0001"};
    // setTimeout( () => resolve(10), 1000); //1초 후에 작업이 성공했음을 알리는 명령어를 보낸다.
    // setTimeout(() => resolve(data),1000);
    setTimeout(() => reject("데이터 수신 오류"),1000);
})

.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log("ending....");
});

console.log(promise);