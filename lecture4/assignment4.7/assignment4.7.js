const names = [
  "rauni",
  "matias",
  "Kimmo",
  "Heimo",
  "isko",
  "Sulevi",
  "Mikko",
  "daavid",
  "otso",
  "herkko"
];

console.log(names);

names.forEach(name => {
  return console.log(name[0].toUpperCase() + name.substring(1));
});