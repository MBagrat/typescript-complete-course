class Person {
  name: string;
  protected age: number = 27;
  private type: string;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Old Guy");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Bagrat", "MBagrat");
console.log(person.name, person.username);
person.printAge();
// person setType("Cool guy"); Won't work with private method

// Inheritance
class Bagrat extends Person {
  // name = "Bagrat";

  constructor(username: string) {
    super("Bagrat", username);
    this.age = 31;
  }
}

const bagrat = new Bagrat("MBagrat");
console.log(bagrat);

//Getter & Setter
console.log("===GETTER & SETTER===");

class Plant {
  private _species: string = "Default";


  get species(): string {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

// Static properties & methods
console.log("===STATIC PROPERTIES & METHODS===");

class Helpers {
  static PI: number = 3.14;

  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
console.log("===ABSTRACT CLASSES===");

abstract class Project {
  projectName: string = "Default";
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// private constructors
console.log("===PRIVATE CONSTRUCTORS===");

class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public readonly name: string) {
  }

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("THe Only One");
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne("The Only One");
let right = OnlyOne.getInstance();
console.log(right);
// right.name = "Something else";