let promise = new Promise(function(resolve,reject) {
    setTimeout(() => {
        s=0;
        for(i=1; i<=100; i++) {
            s+=i;
        }
        resolve(s); //resolve의 함수에 전달되는 값이 then 구문의 콜백함수의 매개변수로 전달된다.
    },1000);
})

.then((value) => {
    console.log(value);
})
.catch(error => { //reject(에러값)
    console.log(error);
})
.finally(() => { 
    console.log("ending....");
});

console.log(promise);