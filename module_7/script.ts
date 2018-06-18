namespace Module_7 {
  interface NamedPerson {
    firstName: string;
    age?: number;

    [propName: string]: any;

    greet(lastName: string): void;
  }

  function greet(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
  }

  function changeName(person: NamedPerson) {
    person.firstName = "Anna";
  }

  const person: NamedPerson = {
    firstName: "Bagrat",
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string){
      console.log("Hi, I am " + this.firstName + " " + lastName);
    }
  };

  // greet({firstName: "Bagrat", age: 27});
  changeName(person);
  greet(person);
  person.greet("Mukaelyan");

  class Person implements NamedPerson{
    firstName: string;
    lastName: string;

    greet(lastName: string){
      console.log("Hi, I am " + this.firstName + " " + lastName);
    }
  }

  const myPerson = new Person();
  myPerson.firstName = "Bagrat";
  myPerson.lastName = "Mukaelyan";
  greet(myPerson);
  myPerson.greet(myPerson.lastName);

  // Function Types
  interface DoubleValueFnc {
    (number1: number, number2: number): number;
  }

  let myDoubleFunction: DoubleValueFnc;
  myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
  };
  console.log(myDoubleFunction(10, 20));

  // Interface inheritance
  interface AgedPerson  extends NamedPerson{
    age: number;
  }

  const oldPerson: AgedPerson = {
    age: 29,
    firstName: "Bagrat",
    greet(lastName: string){
      console.log("Hello!");
    }
  };

  console.log(oldPerson);
}