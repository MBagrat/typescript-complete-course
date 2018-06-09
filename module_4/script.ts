// let & const
console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // won't work

// Block scope
function reset() {
  // console.log(variable);
  let variable = null;
  console.log(variable);
}

reset();
console.log(variable);

// Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(3, 10));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(3, 10));

const greet = () => {
  console.log("Hello!");
};
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Kmao");

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countDown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done!", start);
};

countDown();

// REST & SPREAD
console.log("REST & SPREAD");
console.log("1. SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));

console.log("2. REST");

function makeArray(nmae: string, ...args: number[]): number[] {
  return args;
}

console.log(makeArray("Bagrat", 2, 3, 8));

// Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];

// hobby1 = myHobbies[0];
// hobby2 = myHobbies[1];
// console.log(hobby1, hobby2);

const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const myUserData = {userName: "Bagrat", age: 27};

// const myUserName = myUserData.userName;
// const myAge = myUserData.age;
// console.log(myUserName, myAge);

const {userName: myNewName, age: myNewAge} = myUserData;
console.log(myNewName, myNewAge);

// Template Literals
const userName = "Max";
// const greeting = "Hello, I'm " + userName + "This isn't cool";
const greeting = ` This is a heading
I'm ${userName}.
This is cool! `;
console.log(greeting);