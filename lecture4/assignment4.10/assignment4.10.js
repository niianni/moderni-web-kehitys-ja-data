const names = [
  "Murphy",
  "Hayden",
  "Parker",
  "Arden",
  "George",
  "Andie",
  "Ray",
  "Storm",
  "Tyler",
  "Pat",
  "Keegan",
  "Carroll"
];

const findSpecial = names.find((name) => name.length === 3 && name.slice(-1) === "t");

console.log(findSpecial);