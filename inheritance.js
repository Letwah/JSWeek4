//The constructor

class Vehicle {
  constructor(make) {
    this._make = make;
  }

  make() {
    return this._make;
  }
}

class Car extends Vehicle {
  constructor(make, noOfDoors) {
    super(make);
    this.noOfDoors = noOfDoors;
  }

  doors() {
    return this.doors;
  }
}

class Electric extends Car {
  constructor(make, noOfDoors, kwh) {
    super(make, noOfDoors);
    this.kwh = kwh;
  }

  range() {
    return this.kwh / 100;
  }
}

class Petrol extends Car {
  constructor(make, noOfDoors, litres) {
    super(make, noOfDoors);
    this.litres = litres;
  }

  range() {
    return this.litres / 20;
  }
}

const _electricCar = new Electric("Toyota", 5, 200);
console.log("Range", _electricCar.range(), "Doors", _electricCar.doors());

// const _car = new Car("audi", 4);

// console.log(_car.make());
