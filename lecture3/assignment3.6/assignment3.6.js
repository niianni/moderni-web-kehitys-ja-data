/*Ohjelma tulostaa kolmella tai viidellä jaollisten
kokonaislukujen summan annettuun lukuun n asti*/

let n = 5;
let sum1 = 0;
let sum2 = 0;

// toteutus for-luupilla
for (let i = 0; i <= n; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum1 = sum1 + i;
  }
}
console.log(sum1);

//toteutus while-luupilla
let i = 1;
while (i <= n) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum2 = sum2 + i;
  }
  i++;
}
console.log(sum2);