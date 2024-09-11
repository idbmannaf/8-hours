"use strict";
/**
 * Class
 */
class Coder {
    // name: string;
    // language: string;
    // experience: number;
    constructor(name, language, age, experience) {
        this.name = name;
        this.language = language;
        this.age = age;
        this.experience = experience;
        // this.secondLang = "JavaScript"; // Accessible only within the class
        this.name = name;
        this.language = language;
        this.age = age;
        this.experience = experience;
    }
    getCoderDetails() {
        console.log(`Coder: ${this.name}, language: ${this.language}, experience ${this.experience}`);
    }
    getAge() {
        console.log(`age: ${this.age}`);
    }
}
const coder = new Coder("Abdul Mannaf", "PHP", 35, 10);
console.log(coder.language);
console.log(coder.name);
// console.log(coder.age); //Property 'age' is private and only accessible within class 'Coder'.
// console.log(coder.experience); // Property 'experience' is protected and only accessible within class 'Coder' and its subclasses.
coder.getAge(); //access the age property via getAge method
coder.getCoderDetails();
class WebDev extends Coder {
    constructor(computer, name, language, age, experience) {
        super(name, language, age, experience);
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.language}`;
    }
}
const mannaf = new WebDev("Windows", "Abdul Mannaf", "JavaScript", 35, 10);
console.log(mannaf.getLang());
// mannaf.age; //Property 'age' is private and only accessible within class 'Coder'
// mannaf.experience; //Property 'experience' is protected and only accessible within class 'Coder' and its subclasses
mannaf.getAge();
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} plays the ${this.instrument} guitar, ${action}`;
    }
}
const guitarist = new Guitarist("John Doe", "Guitar");
console.log(guitarist.play("Strums"));
class Peeps {
    static getCount() {
        return Peeps.count; // same as this.count
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Jhon = new Peeps("Jhon");
const Stev = new Peeps("Stev");
const Ana = new Peeps("Ana");
console.log(Jhon.id);
console.log(Stev.id);
console.log(Ana.id);
console.log(Peeps.count);
class Brand {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el == "string")) {
            this.dataState = value;
            return;
        }
        throw new Error("Invalid data type. Expected an array of strings.");
    }
}
const MyBands = new Brand();
MyBands.data = ["Queen", "AC/DC", "Led Zeppelin"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, " Brand 2"]; // add another brand
console.log(MyBands.data);
