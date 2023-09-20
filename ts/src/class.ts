//abstract only be used for extensions
abstract class Animal {
  readonly name: string;
  readonly age: number;
  status: string;

  constructor(name: string, age: number, status: string) {
    this.name = name;
    this.age = age;
    this.status = status;
  }

  abstract updateStatus(status: string): void;

  sayHello() {
    console.log(`My name is ${this.name} and my age is ${this.age} and I am ${this.status}`);
  }

}

class Dog extends Animal {
  gender: string;

  constructor(name: string, age: number, status:string, gender: string) {
    super(name, age, status);
    this.gender = gender;
  }

  bark() {
    console.log("wow!");
  }

  sayHello(){
    super.sayHello();
    console.log(`He is a ${this.gender} dog`)
  }

  updateStatus(activity:string) {
    if (activity === "get shot") {
      this.status = "dead"
      console.log(`he is ${this.status}`)
    }
  } 
}

class Cat extends Animal {

  updateStatus(activity:string) {
    if (activity === "get food") {
      this.status = "happy"
    }
  } 

  meow() {
    console.log("miao!");
  }
}


const dog1 = new Dog("David", 33, "live", "male")
const cat1 = new Cat("Simon", 3, "live")
const dog2 = new Dog("James", 39, "get shot", "other")
dog1.sayHello()
dog2.updateStatus("get shot")
dog2.sayHello()
cat1.meow()