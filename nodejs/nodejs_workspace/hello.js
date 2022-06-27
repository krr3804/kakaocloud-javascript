let a = 10;
let b = 20;
console.log(`${a} + ${b} = ${a+b}`);

function sigma(limit = 10) {
    let i, sum=0;
    for(i=1; i<=limit;i++) {
        sum+=i;
    }
    return sum;
}

console.log(sigma());
console.log(sigma(20));
console.log(sigma(400));
console.log(sigma(6000));