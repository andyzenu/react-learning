import { noOneHaoHan } from "./tssub.js";
console.log(noOneHaoHan);
let c = false;
c = true;
function sumTotal(a, b) {
    return a + b;
}
let gender;
let types;
let stringType;
let anyType;
let unknownType;
unknownType = "this is a string";
stringType = unknownType;
console.log(sumTotal(1, 3));
console.log(stringType);
function fcd() {
    console.log(1234);
}
function fcdnever() {
    throw new Error("broken");
}
fcd();
let obj;
obj = { name: "monkey king", age: 12 };
let newObj;
newObj = { name: "monkey king", age: 100, gender: "male" };
let newFc;
newFc = (num1, num2) => num1 + num2;
console.log(newFc(1, 2));
let stringArray;
stringArray = ["monkey king", "monkey queen", "1"];
let tupleNumType;
tupleNumType = [1, 20];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
let enumType;
enumType = {
    name: "Monkey King",
    gender: Gender.Other
};
console.log(enumType.gender);
let m;
m = 4;
const newType = {
    name: "James",
    gender: "male",
    age: 9
};
console.log(newType.name);
class MyClass {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    load() {
        console.log('reloading');
    }
}
const myClass1 = new MyClass("Lebron", "other", 39);
console.log(myClass1.age);
myClass1.load();
