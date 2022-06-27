let person = {"name":"홍길동","age":23,"phone":"010-0000-0001"};


console.log(Object.entries(person));
for(const [key, value] of Object.entries(person)) {
    console.log(`${key}===> ${value}`);
}

let students = [
    {name : "홍길동", kor:90, eng:98, mat:90},
    {name : "장길산", kor:80, eng:89, mat:20},
    {name : "임꺽정", kor:60, eng:71, mat:80},
    {name : "장승업", kor:70, eng:30, mat:91},
    {name : "홍경래", kor:20, eng:50, mat:90}
];

console.log(`객체의 개수 : ${students.length}`);
console.log(students[0].name);
console.log(students[0]["name"]);
console.log(students[0]["kor"]);

for(i = 0; i < students.length; i++) {
    console.log(students[i].name,students[i].kor);
}

for(idx in students) {
    console.log(students[idx].name, students[idx].kor);
}

for(student of students) {
    console.log(student.name, student.kor);
}

for(const[key,value] of Object.entries(students)) {
    console.log(`${key} : ${value.name} ${value.kor}`);
}

let myProduct = {
    "product_name":"노트북",
    "product_info":[
        {company:"회사1",model:modelAAA,price:2000000},
        {company:"회사1",model:modelAAA,price:1400000},
        {company:"회사1",model:modelAAA,price:2024000},
    ]
}
console.log(myProduct.product_name);
for(item of myProduct.product_info) {
    console.log(item.company,item.info);
}
