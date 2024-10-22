//Funktio ottaa parametrina kaksi numeroa ja palauttaa niiden summan.

//named function
function sum1(a, b) {
  return a + b;
}
console.log(sum1(1,2));

//anonymous function
const sum2 = function (a, b) {
  return a + b;
};
console.log(sum2(1,2));

//arrow function
const sum3 = (a, b) => a + b;
console.log(sum3(1,2));
