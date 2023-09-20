class Animal {
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    sayHello() {
        console.log(`My name is ${this.name} and my age is ${this.age} and I am ${this.status}`);
    }
}
class Dog extends Animal {
    constructor(name, age, status, gender) {
        super(name, age, status);
        this.gender = gender;
    }
    bark() {
        console.log("wow!");
    }
    sayHello() {
        super.sayHello();
        console.log(`He is a ${this.gender} dog`);
    }
    updateStatus(activity) {
        if (activity === "get shot") {
            this.status = "dead";
            console.log(`he is ${this.status}`);
        }
    }
}
class Cat extends Animal {
    updateStatus(activity) {
        if (activity === "get food") {
            this.status = "happy";
        }
    }
    meow() {
        console.log("miao!");
    }
}
const dog1 = new Dog("David", 33, "live", "male");
console.log(dog1);
const cat1 = new Cat("Simon", 3, "live");
const dog2 = new Dog("James", 39, "get shot", "other");
dog1.sayHello();
dog2.updateStatus("get shot");
dog2.sayHello();
cat1.meow();
