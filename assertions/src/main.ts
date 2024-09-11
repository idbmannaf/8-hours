/**
 * Type Assertion
 */
type One = string;
type Two = string | number;
type Three = "hello";

//Convert To more or less Specific

let a: One = "Hello";
let b = a as Two; //Less specific type
let c = a as Three; //More specific type

let d = <One>"Hello";
let e = <string | number>"World";

console.log(e);

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return " " + a * b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

//Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

console.log(typeof myVal);
console.log(typeof nextVal);

//The Dom =================================================================>>>>

// const img = document.querySelector("img") as HTMLImageElement;
const img = document.querySelector("img")!; //Also you can use that
const myImg = document.getElementById("img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("img"); // NOTE:  No Work in React

img.setAttribute("abc", "Working");
console.log(img.src);
console.log(myImg.src);
console.log(nextImg.src);

const copyright = document.getElementById("year") as HTMLSpanElement;
if (copyright) {
  let year: string = new Date().getFullYear().toString();
  copyright.setAttribute("datetime", year);
  copyright.textContent = year;
}
