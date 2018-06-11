// let & const
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // won't work
// Block scope
function reset() {
  // console.log(variable);
  var variable = null;
  console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
  return number1 + number2;
};
console.log(addNumbers(3, 10));
var multiplyNumbers = function (number1, number2) {
  return number1 * number2;
};
console.log(multiplyNumbers(3, 10));
var greet = function () {
  console.log("Hello!");
};
greet();
var greetFriend = function (friend) {
  return console.log(friend);
};
greetFriend("Kmao");
// Default Parameters
console.log("DEFAULT PARAMETERS");
var countDown = function (start) {
  if (start === void 0) {
    start = 10;
  }
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
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
console.log("2. REST");
function makeArray(nmae) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  return args;
}
console.log(makeArray("Bagrat", 2, 3, 8));
// Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
// hobby1 = myHobbies[0];
// hobby2 = myHobbies[1];
// console.log(hobby1, hobby2);
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var myUserData = {userName: "Bagrat", age: 27};
// const myUserName = myUserData.userName;
// const myAge = myUserData.age;
// console.log(myUserName, myAge);
var myNewName = myUserData.userName, myNewAge = myUserData.age;
console.log(myNewName, myNewAge);
// Template Literals
var userName = "Max";
// const greeting = "Hello, I'm " + userName + "This isn't cool";
var greeting = " This is a heading\nI'm " + userName + ".\nThis is cool! ";
console.log(greeting);
//# sourceMappingURL=script.js.map