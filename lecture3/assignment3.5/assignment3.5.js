/*Ohjelma  tulostaa kokonaislukujen summan annettuun lukuun n asti*/

let n = 5;
let sum1 = 0;
let sum2 = 0;

// toteutus for-luupilla
for (let i = 0; i <= n; i++) {
  sum1 = sum1 + i;
}
console.log(sum1);

//toteutus while-luupilla
let i = 0;
while (i <= n) {
  sum2 = sum2 + i;
  i++;
}
console.log(sum2);