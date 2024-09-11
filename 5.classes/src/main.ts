/**
 * Class
 */

class Coder {
  secondLang!: string;
  // name: string;
  // language: string;
  // experience: number;
  constructor(
    public readonly name: string,
    public language: string,
    private age: number,
    protected experience: number
  ) {
    // this.secondLang = "JavaScript"; // Accessible only within the class
    this.name = name;
    this.language = language;
    this.age = age;
    this.experience = experience;
  }
  getCoderDetails(): void {
    console.log(
      `Coder: ${this.name}, language: ${this.language}, experience ${this.experience}`
    );
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
  constructor(
    public computer: string,
    name: string,
    language: string,
    age: number,
    experience: number
  ) {
    super(name, language, age, experience);
  }

  public getLang() {
    return `I write ${this.language}`;
  }
}

const mannaf = new WebDev("Windows", "Abdul Mannaf", "JavaScript", 35, 10);
console.log(mannaf.getLang());
// mannaf.age; //Property 'age' is private and only accessible within class 'Coder'
// mannaf.experience; //Property 'experience' is protected and only accessible within class 'Coder' and its subclasses
mannaf.getAge();

/**
 * More Examples of Class ====================================>>>>>>>>>>>>>>>>
 */

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} plays the ${this.instrument} guitar, ${action}`;
  }
}

const guitarist = new Guitarist("John Doe", "Guitar");
console.log(guitarist.play("Strums"));

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count; // same as this.count
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const Jhon = new Peeps("Jhon");
const Stev = new Peeps("Stev");
const Ana = new Peeps("Ana");

console.log(Jhon.id);
console.log(Stev.id);
console.log(Ana.id);
console.log(Peeps.count);

class Brand {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
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
