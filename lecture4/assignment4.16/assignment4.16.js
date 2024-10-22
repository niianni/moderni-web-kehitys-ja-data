let start = Number(process.argv[2]);
let end = Number(process.argv[3]);

let numArray = [];

if ( start <= end ) {
  for (let i = start; i <= end; i++) {
    numArray.push(i);
  }
} 

if ( start > end ) {
  for (let i = start; i >=end; i--) {
    numArray.push(i);
  }
}

console.log(numArray);