"use strict";
//Convert To more or less Specific
let a = "Hello";
let b = a; //Less specific type
let c = a; //More specific type
let d = "Hello";
let e = "World";
console.log(e);
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return " " + a * b;
};
let myVal = addOrConcat(2, 2, "concat");
//Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
console.log(typeof myVal);
console.log(typeof nextVal);
//The Dom =================================================================>>>>
// const img = document.querySelector("img") as HTMLImageElement;
const img = document.querySelector("img"); //Also you can use that
const myImg = document.getElementById("img");
const nextImg = document.getElementById("img"); // NOTE:  No Work in React
img.setAttribute("abc", "Working");
console.log(img.src);
console.log(myImg.src);
console.log(nextImg.src);
const copyright = document.getElementById("year");
if (copyright) {
    let year = new Date().getFullYear().toString();
    copyright.setAttribute("datetime", year);
    copyright.textContent = year;
}
