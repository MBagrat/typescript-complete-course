// Re-write the below Code using the ES6 Features you learned throughout this Module.

// Exercise 1 - Maybe use an Arrow Function?
const double = value => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
const exGreet = function (name: string = undefined): void {
  if (name === undefined) {
    name = "Max";
  }
  console.log("Hello, " + name);
};
exGreet();
exGreet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
const exNumbers = [-3, 33, 38, 5];
console.log(Math.min(...exNumbers));

// Exercise 4 - I have to think about Exercise 3 ...
const newArray = [55, 20];
newArray.push(...exNumbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
const scientist = {firstName: "Will", experience: 12};
const {firstName: fn, experience: exp} = scientist;
console.log(fn, exp);
