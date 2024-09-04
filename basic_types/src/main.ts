// #Basic Types

let myName: string = "Mannaf"; //String Type
let age: number; //Number Type
let isLoading: boolean = true; //boolean Type
let album: string | number; //String or Number Type

myName = "Abdul Mannaf";
age = 32;
isLoading = false;
album = 55;
album = "abc";

const sum = (a: number, b: string) => a + b;

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\W+/g; //Regular Expression Type

console.log(`Total:::>>  ${sum(10, "80")}`);
