class Animal {

    constructor(name = "") {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name}이(가) 속도 ${speed}로 달립니다.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name}이(가) 멈췄습니다.`);
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name}이(가) 숨었습니다.`);
    }
    //오버라이딩
    stop() {
        super.stop();
        this.hide();
    }
}

let rabbit = new Rabbit("휜토끼");
rabbit.run(100);
rabbit.stop();

console.log(rabbit);