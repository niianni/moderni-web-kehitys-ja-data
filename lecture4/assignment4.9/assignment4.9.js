const numbers = [
  749385,
  498654,
  234534,
  345467,
  956876,
  365457,
  235667,
  464534,
  346436,
  873453
];

const filteredNumbers = numbers.filter((num) => {
  if ((num % 3 === 0 || num % 5 === 0) && !(num % 15 === 0)) {
    return num;
  }
});

console.log(filteredNumbers);