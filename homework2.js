///import export (use modules)

//the default unnamed function

// import { housePlant } from "./housePlant.js";

// const MonsteraDeliciosa = new housePlant(
//   "Monstera Deliciosa",
//   "common houseplant",
//   "indoor",
//   "full Sun",
//   "no varigaton"
// );

// console.log(MonsteraDeliciosa.plantInfo);

// class Varigation extends housePlant {
//   constructor(_name, _type, _hardy, _position, pattern) {
//     super(_name, _type, _hardy, _position);
//   }
//   set pattern(pattern) {
//     this._pattern = pattern;
//   }

//   get patternInfo() {
//     return `This Variageted plant has camo patterns and is an ${this._hardy} plant`;
//   }
// }

// //new keyword is new instance of

// const AglonemaPictumTricolor = new Varigation(
//   "Aglonema Pictum Tricolor",
//   "rare houseplant",
//   "indoor",
//   "partSun",
//   "camo varigation"
// );

//3. fat arrow function no return
// console.log(
//   typeof AglonemaPictumTricolor
//   // AglonemaPictumTricolor.map(
//   //   (AglonemaPictumTricolor) => AglonemaPictumTricolor.pattern
//   // )
// );

//4. default parameter??? static method
const add2 = (x = 0, y = 0) => x + y;

console.log("hi", add2(2));

// console.log(AglonemaPictumTricolor.pattern);

// class Other extends housePlant {
//   //some factor
// }

//5. create an object

const dog = {
  isHuman: false,
  dogBio: function () {
    console.log(`I'm ${this.name}, and I think i'm a human ${this.isHuman}`);
  },
};

const ron = Object.create(dog);

ron.name = "Ronnie";
ron.isHuman = "false";

ron.dogBio(); // returns : I'm Ronnie, and I think i'm a human false

Object.defineProperty(ron, "name", {
  value: {
    name: "Ronnie",
    age: "11",
    address: {
      town: "woodbridge",
      country: "uk",
      favThings: {
        fun: "walking",
        food: "chicken",
        other: "barking",
      },
    },
  },
});

console.log(dog);

const obj = { a: 1, b: 2, c: 3 };

Object.defineProperty(obj, "name", {
  value: "Colette",
  writable: true,
  configurable: true,
  enumerable: true,
});

console.log(obj);

//object destructuring - level 3 from above ?????

console.log(Object(obj));

///9. SPREAD and REST

const favFilms = [
  "The Departed",
  "The Usual Suspects",
  "The Matrix",
  "Point Break",
  "Lost in Translation",
];

//rest ...

const [item1, item2, ...allTheRest] = favFilms;

console.log(item1, item2, allTheRest);

const add = (...items) => {
  console.log(items);
};

add(1, 2, 3, 4, 5, 5, 5, 5, 5, 5); //opposite of destructuring

// SPREAD OPERATOR - ADDS THEM INSREAD OF CONCAT or assigning objects
const newFavFilms = ["The Untouchables", "Memento", ...favFilms];

console.log(newFavFilms);

//10. send arguments to a function

const filmsILike = [
  "The Departed",
  "The Usual Suspects",
  "The Matrix",
  "Point Break",
  "Lost in Translation",
];

const [...fiveFilms] = filmsILike;

console.log(...fiveFilms);

const findKeanu = (arr) => {
  arr.find((item) => {
    if (item === "The Matrix") {
      console.log(`i found the matrix`);
    }
  });
};

// REST operator???
findKeanu(["The Marix", "Point Break"]);

// 11. add a function to one of the objects, use the object method shorthand
///???????? ASK RUSSELL ABOUT THIS

// const bestFiim = function (item3) {
//   return "Point Break";
// };

const dog2 = {
  isHuman: false,
  dogBio() {
    console.log(`I'm ${this.name}, and I think i'm a human ${this.isHuman}`);
  },
};

// console.log(???);
