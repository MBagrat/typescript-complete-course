// Exercise One - Class
class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk(): void {
    console.log("Toooooooooot!");
  }

  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}

let exCar = new Car("BMW");
exCar.honk();
console.log(exCar.acceleration);
exCar.accelerate(10);
console.log(exCar.acceleration);

// Exercise Two - Inheritance
class BaseObject {
  private _width: number = 0;

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  private _length: number = 0;

  get length(): number {
    return this._length;
  }

  set length(value: number) {
    this._length = value;
  }
}

class Rectangle extends BaseObject {
  calcSize(): number {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

// Exercise Three -
class SuperPerson {
  private _firstName: string = "";

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
}

const normalPerson = new SuperPerson();
console.log(normalPerson.firstName);
normalPerson.firstName = "Ma";
console.log(normalPerson.firstName);
normalPerson.firstName = "Maximilian";
console.log(normalPerson.firstName);
