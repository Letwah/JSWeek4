export function add(x, y) {
  return x + y;
}

export function multiply(x, y) {
  return x * y;
}

//default (no name) will return if you don't call anything
export default function (x, y) {
  return x / y;
}

//export means its available inside other file

export const me = {
  name: "Colette",
};

export const age = "41";
