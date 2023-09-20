class Animal {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }

}

class Dog extends Animal {
  bark() {
    console.log("wow!");
  }
}

class Cat extends Animal {
  meow() {
    console.log("miao!");
  }
}


const dog1 = new Dog("David", 33)
const cat1 = new Cat("Simon", 3)

dog1.sayHello()
cat1.meow()