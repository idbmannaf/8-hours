/**
 * Array
 */
let stringArr: string[] = ["one", "two", "three", "four", "five"];

let guitars = ["Strat", "les Paul", 5150]; // String and Number Array

let mixedData: any[] = ["EVM", 1998, true]; //Mix Array

let numberArr: number[] = [1, 2, 3, 4, 5]; //Number Array

stringArr[0] = "Mananf";
stringArr.push("Hello");
console.log(stringArr);

guitars[0] = 1995;
guitars.unshift("Mananf");
console.log(guitars);

let text = [];
let brand: string[] = []; //Assigned Empty Array
brand.push("New Brand");

console.log(brand);

/**
 * Tuple
 */

let myTuple: [string, number, boolean] = ["Mannaf", 32, true];

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

let myObject: object;
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

type Guitarist = {
  name: string;
  isActive: boolean;
  album: (string | number)[];
  age?: number;
};
interface GuitaristInterface {
  name: string;
  isActive: boolean;
  album: (string | number)[];
  age?: number;
}

let firstGuitarist: Guitarist; //  Variable Declared and type assigned;

firstGuitarist = {
  name: "Abdul Mananf",
  isActive: true,
  album: [1899, "ABC"],
};
console.log(firstGuitarist);

let secondGuitarist: Guitarist;
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
const greetGritarist = (guitarist: Guitarist): Guitarist => {
  return guitarist;
};

console.log("Using Type Declaration  ====>>>");
console.log(greetGritarist(secondGuitarist));

/**
 *
 * @param guitarist :GuitaristInterface
 * @returns
 */
const greetGritaristByInterface = (
  guitarist: GuitaristInterface
): GuitaristInterface => {
  return guitarist;
};

console.log("Using  Interface ====>>>");
console.log(greetGritaristByInterface(firstGuitarist));

console.log("ENUM ======");

enum Grate {
  A = 1,
  B,
  C,
  D,
}

console.log(Grate.C);
