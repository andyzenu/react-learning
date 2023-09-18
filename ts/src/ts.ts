import { noOneHaoHan } from "./tssub.js"
console.log(noOneHaoHan)

let c: boolean = false
c = true

function sumTotal (a: number, b: number): number {
  return a + b
}

let gender: "male" | "female"
let types: string | number
let stringType: string

let anyType: any

let unknownType: unknown

unknownType = "this is a string"

stringType = <string>unknownType

console.log(sumTotal(1, 3))
console.log(stringType)

function fcd(): void {
  console.log(1234)
}

function fcdnever(): never {
  throw new Error("broken")
}

fcd()

let obj: {
  name: string,
  age: number
}

obj = {name: "monkey king", age: 12}

// add as many props as possible
let newObj: {
  name: string, 
  [propName: string]: any
}

newObj = {name: "monkey king", age: 100, gender: "male"};

let newFc: (a:number, b:number) => number

newFc = (num1, num2) => num1 + num2

console.log(newFc(1,2))

// string array
let stringArray: string[] // let stringArray: Array<string>
stringArray = ["monkey king", "monkey queen", "1"]

// tuple
let tupleNumType: [number, number]
tupleNumType = [1, 20]

//enum type
enum Gender {
  Male,
  Female,
  Other
} 

let enumType: {
  name: string,
  gender: Gender
}

enumType = {
  name: "Monkey King",
  gender: Gender.Other
}

console.log(enumType.gender)

// type aliases
type myType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
let m: myType

m = 4
