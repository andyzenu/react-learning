let c: boolean = false
c = true

function sum (a: number, b: number): number {
  return a + b
}

let gender: "male" | "female"
let types: string | number
let stringType: string

let anyType: any

let unknowType: unknown

unknowTypes = "this is a string"

stringType = <string>unknowType
console.log(sum(1, 3))
console.log(stringType)