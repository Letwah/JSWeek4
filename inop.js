//in operator
// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
"bay" in trees; // returns false (you must specify the
// index number, not the value at that index)
"length" in trees; // returns true (length is an Array property)
Symbol.iterator in trees; // returns true (arrays are iterable, works only in ES2015+)

//iteration

const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    // stops it searching the prototype chain
    console.log("obj." + key, "=", obj[key]);
  }
}


