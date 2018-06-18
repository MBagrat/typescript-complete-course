var Module_7;
(function (Module_7) {
    function greet(person) {
        console.log("Hello, " + person.firstName);
    }
    function changeName(person) {
        person.firstName = "Anna";
    }
    var person = {
        firstName: "Bagrat",
        hobbies: ["Cooking", "Sports"],
        greet: function (lastName) {
            console.log("Hi, I am " + this.firstName + " " + lastName);
        }
    };
    // greet({firstName: "Bagrat", age: 27});
    changeName(person);
    greet(person);
    person.greet("Mukaelyan");
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.greet = function (lastName) {
            console.log("Hi, I am " + this.firstName + " " + lastName);
        };
        return Person;
    }());
    var myPerson = new Person();
    myPerson.firstName = "Bagrat";
    myPerson.lastName = "Mukaelyan";
    greet(myPerson);
    myPerson.greet(myPerson.lastName);
    var myDoubleFunction;
    myDoubleFunction = function (value1, value2) {
        return (value1 + value2) * 2;
    };
    console.log(myDoubleFunction(10, 20));
    var oldPerson = {
        age: 29,
        firstName: "Bagrat",
        greet: function (lastName) {
            console.log("Hello!");
        }
    };
    console.log(oldPerson);
})(Module_7 || (Module_7 = {}));
