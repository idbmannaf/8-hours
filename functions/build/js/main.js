"use strict";
/**
 * Function
 */
//Literal Types
let myName;
let userName;
userName = "Dave";
// userName = "John";
console.log(userName);
//Functions
const add = (a, b) => a + b;
console.log(` 2 + 5 = ${add(2, 5)}`);
const logMsg = (a) => console.log(a);
let multiply = (a, b) => a * b;
console.log(`mathFunctions with multiplication: ${multiply(2, 2)}`);
//Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
console.log(`addAll: ${addAll(1, 2, 3)}`);
console.log(`addAll without c value: ${addAll(1, 2)}`);
//Default Parameters
const addAllWithDefaultParameters = (a, b, c = 2) => a + b + c;
logMsg(`addAllWithDefaultParameters: ${addAll(1, 2, 3)}`);
logMsg(`addAllWithDefaultParameters without c value: ${addAll(1, 2)}`);
//Rest Parameter
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(`Total using rest parameter: ${total(1, 2, 3, 4, 5, 5)}`);
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        console.log(i);
        i++;
        if (i > 100)
            break;
    }
};
//Custom type Guard
const isNumber = (value) => typeof value === "number";
// use of never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "String";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
