///GETTERS AND SETTERS ON OBJECTS

// const dog = {
//   name: "Ronnie",
//   breed: "border terrier",
//   interests: ["eating", "walks"],
//   get dogbio() {
//     return `${this.name} is a ${this.breed} and his main interests are ${this.interests[0]}.`;
//   },
//   set primaryInterest(_interests) {
//     console.log("setting primary interests");
//     this.interests.unshift(_interests);
//   },
//   get primaryInterest() {
//     return this.interests[0];
//   },
// };

// console.log(dog.dogbio);
// dog.primaryInterest = "barking";
// console.log(dog.dogbio);

///GETTERS AND SETTERS ON Classes

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   set name(value) {
//     if (value.lenght > 30) {
//       //add checks or validation
//       throw new Error("Name is too long!");
//     }
//     this._name = value;
//   }

//   get name() {
//     return this._name.toUpperCase();
//   }
// }

// const Letty = new Person("Letty");
// console.log(Letty.name);

class Plant {
  constructor(name, type, hardy) {
    (this._name = name), (this._type = type), (this._hardy = hardy);
  }
  set name(name) {
    this._name = name;
  }

  set type(type) {
    this._type = type;
  }

  set hardy(hardy) {
    this._hardy = hardy;
  }

  get plantInfo() {
    return `${this._name} is a ${this._type} and is ${this._hardy} plant.`;
  }
}

class housePlant extends Plant {
  constructor(_name, _type, _hardy, position) {
    super(_name, _type, _hardy);
  }

  set position(position) {
    this._position = position;
  }

  get positionLight() {
    return `${this._name} likes full sun`;
  }
}

const MonsteraDeliciosa = new housePlant(
  "Monstera Deliciosa",
  "common houseplant",
  "indoor",
  "full Sun",
  "no varigaton"
);

console.log(MonsteraDeliciosa.plantInfo);

class Varigation extends housePlant {
  constructor(_name, _type, _hardy, _position, pattern) {
    super(_name, _type, _hardy, _position);
  }
  set pattern(pattern) {
    this._pattern = pattern;
  }

  get patternInfo() {
    return `This Variageted plant has camo patterns and is an ${this._hardy} plant`;
  }
}

const AglonemaPictumTricolor = new Varigation(
  (name = "Aglonema Pictum Tricolor"),
  (type = "rare houseplant"),
  (hardy = "indoor"),
  (position = "partSun"),
  (pattern = "camo varigation")
);

console.log(AglonemaPictumTricolor.patternInfo);

///import export (use modules)

//the default unnamed function
import divide, { add, multiply } from "./utils.js";
console.log(add(2, 3), multiply(9, 9));

// import { Plant } from "./Plant.js";
// import { housePlant } from "./housePlant.js";

// class Other extends housePlant {
//   //some work
// }
