// string
let myName: string = 'Bagrat';
// myName = 5;

// number
let myAge: number = 29;
// myAge = 'Bagrat';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

//array
let hobbies: any[] = [ "Cooking", "Sports" ];
hobbies = [ 100 ];
// hobbies = 100;

// tuples
let address: [ string, number ] = [ "Superstreet", 99 ];

// enum
enum Color {
  Gray, //0
  Green = 100, //100
  Blue = 2 //2
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}

console.log(returnMyName());

// void
function sayHello(): void {
  console.log("Hello!");
}

sayHello();

// arguments type
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

// console.log(multiply(5, "Bagrat"));
console.log(multiply(5, 20));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 5));

// objects
let userData: { name: string, age: number } = {
  name: "Bagrat",
  age: 28
};
// userData = {
//   a: "Hello",
//   b: 22
// };

// complex object
let complexx: { data: number[], output: (all: boolean) => number[] } = {
  data: [ 10, 20, 30, 40, 50 ],
  output: function (all: boolean): number[] {
    return this.data;
  }
};
// complex = {};

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [ 10, 20, 30, 40, 50 ],
  output: function (all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// if (typeof myRealRealAge == "number | string"){
//   console.log("Union type don't working");
// }

// check types
let finalValue = "Some Text";
if (typeof finalValue == "string") {
  console.log("Final value is a string");
}

// never
function neverReturn(): never {
  throw new Error();
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
// Now type is undefined
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeNull: number | null;
canThisBeNull = 12;
