// const o = { a: 1, b: 2, c: 3 };

// delete o.a;

// console.log(o);

//* A property can be:

//enumerable

//writable

//configurable *////

/** 
 * 
 * Object.defineProperty(obj, 'propNameString', settingObj);

Object.defineProperties(obj, { propName1[String]: setting1Obj, propName2[String]: setting2Obj });


and Read with: Object.getOwnPropertyDescriptor( obj, 'c' ); 


https://slides.com/jmsherry/js-object-theory-v2?token=Huj2bCE6#/0/10


**/

const obj = { a: 1, b: 2, c: 3 };

Object.defineProperty(obj, "name", {
  value: "Colette",
  writable: true,
  configurable: true,
  enumerable: true,
});

console.log(obj); /// { a: 1, b: 2, c: 3, name: 'Colette' }

//iTTERATION

//multidimentional array - object entries

const obj = { a: 1, b: 2, c: 3 };

console.log(Object.entries(obj)); ///method on the protoype - convert and object into an array

//keys Object.keys(<object>);

const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));

//Object.getOwnPropertyNames(<object>);

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyNames(obj)); // ["a", "b", "c"]

//Object.fromEntries(<various>);  It's a bit like Array.from() in that it tries to create an object from something
const formdata = new FormData(myForm);
const data = Object.fromEntries(formdata);
console.log("data", data);

//preventing change see slides

//https://slides.com/jmsherry/js-object-theory-v2?token=Huj2bCE6#/0/22

///Don't extend Native Prototypes like this

// function ColettesSuperArray() {
//   ColettesSuperArray.prptotype = Object.create(Array.prototype);

//   ColettesSuperArray.protottype.constructor = SuperArray;

//   ColettesSuperArray.prototype.sayHi = function () {
//     console.log("hi");
//   };
// }

// const _ins = new ColettesSuperArray();

// _ins.sayHi();
