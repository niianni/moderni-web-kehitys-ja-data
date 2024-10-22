let n = process.argv[2];

let fibonacci = [0, 1];

for ( let i = 1; i < n - 1; i++ ) {
  let nextNumber = fibonacci[i-1]+fibonacci[i];
  fibonacci.push(nextNumber);
}
console.log(fibonacci);