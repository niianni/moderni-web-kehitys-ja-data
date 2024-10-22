let sheeps = process.argv[2];
let sheepCountString = ""; 

for ( let i = 1; i <= sheeps; i++ ) {
  sheepCountString += `${i} sheep...`;
}

console.log(sheepCountString);