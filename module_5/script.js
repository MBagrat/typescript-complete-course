var __extends = (this && this.__extends) || (function () {
  var extendStatics = Object.setPrototypeOf ||
      ({__proto__: []} instanceof Array && function (d, b) {
        d.__proto__ = b;
      }) ||
      function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) {
            d[p] = b[p];
          }
        }
      };
  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b)
        : (__.prototype = b.prototype, new __());
  };
})();
var Person = /** @class */ (function () {
  function Person(name, username) {
    this.username = username;
    this.age = 27;
    this.name = name;
  }

  Person.prototype.printAge = function () {
    console.log(this.age);
    this.setType("Old Guy");
  };
  Person.prototype.setType = function (type) {
    this.type = type;
    console.log(this.type);
  };
  return Person;
}());
var person = new Person("Bagrat", "MBagrat");
console.log(person.name, person.username);
person.printAge();
// person setType("Cool guy"); Won't work with private method
// Inheritance
var Bagrat = /** @class */ (function (_super) {
  __extends(Bagrat, _super);

  // name = "Bagrat";
  function Bagrat(username) {
    var _this = _super.call(this, "Bagrat", username) || this;
    _this.age = 31;
    return _this;
  }

  return Bagrat;
}(Person));
var bagrat = new Bagrat("MBagrat");
console.log(bagrat);
//Getter & Setter
console.log("===GETTER & SETTER===");
var Plant = /** @class */ (function () {
  function Plant() {
    this._species = "Default";
  }

  Object.defineProperty(Plant.prototype, "species", {
    get: function () {
      return this._species;
    },
    set: function (value) {
      if (value.length > 3) {
        this._species = value;
      }
      else {
        this._species = "Default";
      }
    },
    enumerable: true,
    configurable: true
  });
  return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
// Static properties & methods
console.log("===STATIC PROPERTIES & METHODS===");
var Helpers = /** @class */ (function () {
  function Helpers() {
  }

  Helpers.calcCircumference = function (diameter) {
    return this.PI * diameter;
  };
  Helpers.PI = 3.14;
  return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract Classes
console.log("===ABSTRACT CLASSES===");
var Project = /** @class */ (function () {
  function Project() {
    this.projectName = "Default";
    this.budget = 1000;
  }

  Project.prototype.calcBudget = function () {
    return this.budget * 2;
  };
  return Project;
}());
var ITProject = /** @class */ (function (_super) {
  __extends(ITProject, _super);

  function ITProject() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ITProject.prototype.changeName = function (name) {
    this.projectName = name;
  };
  return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
// private constructors
console.log("===PRIVATE CONSTRUCTORS===");
var OnlyOne = /** @class */ (function () {
  function OnlyOne(name) {
    this.name = name;
  }

  OnlyOne.getInstance = function () {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("THe Only One");
    }
    return OnlyOne.instance;
  };
  return OnlyOne;
}());
// let wrong = new OnlyOne("The Only One");
var right = OnlyOne.getInstance();
console.log(right);
// right.name = "Something else";
//# sourceMappingURL=script.js.map