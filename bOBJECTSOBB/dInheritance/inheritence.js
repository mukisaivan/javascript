//super is used to refer a parent class 


class Animal{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Hawk extends Animal{
    constructor(name, age, flying) {
        super(name, age)
        this.flying = flying
    }
}

class Rabbit extends Animal{
    constructor(name, age, runspeed) {
        super(name, age)
        this.run = runspeed
    }
}


rabbit1 = new Rabbit("muffy", 20, 40)
console.log(rabbit1);
