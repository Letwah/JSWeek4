//new string methods
const obj = { a: 1, b: 2, c: 3 };
Object.defineProperty(obj, "name", {
  value: "Ronnie",
  writable: true,
  configuarble: true,
  enumerable: false,
});

console.log(obj);
