class User {
    constructor(name = "", age = 10) {
        console.log("생성자");
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(this.name, this.age);
    }
}

let user = new User("John");
user.sayHi();
console.log(user.age = 10);

user = new User();
console.log(user);