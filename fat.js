///template literals

const obj = {
  name: "Colette",
  age: 41,
  favActors: ["keanu", "Pedro"],
  location: {
    postCode: "IP12 4EA",
    town: {
      short: " Wooders",
      long: "Woodbridge",
    },
  },
};

const { name, age } = obj;

console.log(`his name is ${name},
                his age is ${age}, 
                    his town is  ${long} also known as  ${short}`);
