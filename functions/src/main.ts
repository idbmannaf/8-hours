/**
 * Function
 */

//Type Aliases
type stringOrNumber = string | number;
type StringOrNumberArray = stringOrNumber[];

type Person = {
  name: string;
  age: number;
  hobbies?: StringOrNumberArray;
  active: boolean;
};

type UserId = stringOrNumber;

//Literal Types

let myName: "Mananf";

let userName: "Dave" | "John" | "Amy";
userName = "Dave";
// userName = "John";
console.log(userName);

//Functions

const add = (a: number, b: number): number => a + b;

console.log(` 2 + 5 = ${add(2, 5)}`);

const logMsg = (a: any): void => console.log(a);

/**
 * Received Number:
 * Return Number
 */
//In Type
// type mathFunctions = (a: number, b: number) => number; //received number return number

//In interface
interface mathFunctions {
  (a: number, b: number): number;
} //received number return number

let multiply: mathFunctions = (a, b) => a * b;

console.log(`mathFunctions with multiplication: ${multiply(2, 2)}`);

//Optional Parameters

const addAll = (a: number, b: number, c?: number) => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

console.log(`addAll: ${addAll(1, 2, 3)}`);

console.log(`addAll without c value: ${addAll(1, 2)}`);

//Default Parameters

const addAllWithDefaultParameters = (a: number, b: number, c: number = 2) =>
  a + b + c;

logMsg(`addAllWithDefaultParameters: ${addAll(1, 2, 3)}`);

logMsg(`addAllWithDefaultParameters without c value: ${addAll(1, 2)}`);

//Rest Parameter

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(`Total using rest parameter: ${total(1, 2, 3, 4, 5, 5)}`);

const createError = (errorMsg: string): never => {
  throw new Error(errorMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    console.log(i);
    i++;
    if (i > 100) break;
  }
};

//Custom type Guard
const isNumber = (value: any): boolean => typeof value === "number";

// use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "String";
  if (isNumber(value)) return "number";
  return createError("This should never happen");
};
