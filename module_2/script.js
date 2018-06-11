// string
var myName = 'Bagrat';
// myName = 5;
// number
var myAge = 29;
// myAge = 'Bagrat';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
//array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
}
sayHello();
// arguments type
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(5, "Bagrat"));
console.log(multiply(5, 20));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 5));
// objects
var userData = {
    name: "Bagrat",
    age: 28
};
// userData = {
//   a: "Hello",
//   b: 22
// };
// complex object
var complexx = {
    data: [10, 20, 30, 40, 50],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [10, 20, 30, 40, 50],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true;
// if (typeof myRealRealAge == "number | string"){
//   console.log("Union type don't working");
// }
// check types
var finalValue = "Some Text";
if (typeof finalValue == "string") {
    console.log("Final value is a string");
}
// never
function neverReturn() {
    throw new Error();
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
// Now type is undefined
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeNull;
canThisBeNull = 12;
//# sourceMappingURL=script.js.map