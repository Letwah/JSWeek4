// make own objects
//make constructor (start with capital letter cos then they know its a cpnstructor)

// instance start with underscore

function Person(firstName, secondName) {
  this.firstName = firstName;
  this.secondName = secondName;

  this.getFullName = function () {
    return this.firstName + " " + this.secondName;
  };
} //prototype

const _instanceOfPerson1 = new Person("Tally", "Maggiore"); //two instances of a prototype
const _instanceOfPerson2 = new Person("Keanu", "Reeves");

Person.prototype.sayHi = function () {
  console.log(this.firstname, "says hi");
};

//call methods on the instance
console.log(_instanceOfPerson2, _instanceOfPerson2);
console.log(_instanceOfPerson1.sayHi());

//next bit - object array

// const arr = [1, 2, 3, 4, 5];

// Array.prototype.sayHi = function () {
//   console.log("I am a function called say hi i am inside every function");
// };

// arr.sayHi();

///all these objects work on the same principle

///chaining

//in operator

// function Person(firstName, secondName) {
//   this.firstName = firstName;
//   this.secondName = secondName;

//   this.getFullName = function () {
//     return this.firstName + " " + this.secondName;
//   };

// } //prototype

// const _instanceOfPerson1 = new Person("Tally", "Maggiore"); //instance of

// //call methods on the instance

// console.log(_instanceOfPerson1.sayHi());