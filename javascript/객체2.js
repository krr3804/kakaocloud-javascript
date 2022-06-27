let person = {
    name:"홍길동", age:23, phone:"010-0000-0001",
    display:function() {
        console.log(this.name, this.age, this.phone);
        // console.log(name, age, phone) --this 생략불가능;
    },
    //jason 안에 화살표 함수는 사실상 사용불가 - this 사용불가
    // display2:() => {
    //     console.log(this.name, this.age, this.phone);
    // }

    setValue:function(name="", age=10, phone="") {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}

person.display();
person.setValue("John",10,"010-1234-5678");
person.display();

console.log(person);