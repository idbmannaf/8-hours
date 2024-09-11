"use strict";
/**
 * Array
 */
let stringArr = ["one", "two", "three", "four", "five"];
let guitars = ["Strat", "les Paul", 5150]; // String and Number Array
let mixedData = ["EVM", 1998, true]; //Mix Array
let numberArr = [1, 2, 3, 4, 5]; //Number Array
stringArr[0] = "Mananf";
stringArr.push("Hello");
console.log(stringArr);
guitars[0] = 1995;
guitars.unshift("Mananf");
console.log(guitars);
let text = [];
let brand = []; //Assigned Empty Array
brand.push("New Brand");
console.log(brand);
/**
 * Tuple
 */
let myTuple = ["Mannaf", 32, true];
myTuple.push("Tuple");
let mixed = ["Mannaf", true, 22];
//myTuple = mixed; // Error : Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'.
console.log(myTuple);
mixed = myTuple;
console.log(mixed);
console.log("OBJECT=======================");
/**
 * Objects
 */
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = brand;
myObject = {};
console.log(myObject);
const exmapleObj = {
    prop1: "Mannaf",
    prop2: 32,
};
// exmapleObj.prop1 = true; // Error: Type 'boolean' is not assignable to type 'string'
console.log(exmapleObj);
console.log("Type Generation ======");
let firstGuitarist; //  Variable Declared and type assigned;
firstGuitarist = {
    name: "Abdul Mananf",
    isActive: true,
    album: [1899, "ABC"],
};
console.log(firstGuitarist);
let secondGuitarist;
secondGuitarist = {
    name: "Dev",
    isActive: true,
    album: [1899, "ABC", 55],
    age: 25,
};
console.log(secondGuitarist);
/**
 *
 * @param guitarist: Guitarist
 * @returns
 */
const greetGritarist = (guitarist) => {
    return guitarist;
};
console.log("Using Type Declaration  ====>>>");
console.log(greetGritarist(secondGuitarist));
/**
 *
 * @param guitarist :GuitaristInterface
 * @returns
 */
const greetGritaristByInterface = (guitarist) => {
    return guitarist;
};
console.log("Using  Interface ====>>>");
console.log(greetGritaristByInterface(firstGuitarist));
console.log("ENUM ======");
var Grate;
(function (Grate) {
    Grate[Grate["A"] = 1] = "A";
    Grate[Grate["B"] = 2] = "B";
    Grate[Grate["C"] = 3] = "C";
    Grate[Grate["D"] = 4] = "D";
})(Grate || (Grate = {}));
console.log(Grate.C);
