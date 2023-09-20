class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
class Dog extends Animal {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }
    bark() {
        console.log("wow!");
    }
    sayHello() {
        super.sayHello();
        console.log(`He is a ${this.gender} dog`);
    }
}
class Cat extends Animal {
    meow() {
        console.log("miao!");
    }
}
const dog1 = new Dog("David", 33, "male");
const cat1 = new Cat("Simon", 3);
dog1.sayHello();
cat1.meow();
