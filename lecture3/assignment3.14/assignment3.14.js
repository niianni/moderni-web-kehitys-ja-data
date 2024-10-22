let name1 = process.argv[2];
let name2 = process.argv[3];
let name3 = process.argv[4];

let max;
let middle = name3;
let min;

if ( name1.length > name2.length ) {
  max = name1;
  min = name2;
} else {
  max = name2;
  min = name1;
}
if ( name3.length > max.length ) {
  middle = max;  
  max = name3;
} else if ( name3.length < min.length ) {
  middle = min;
  min = name3;
}

console.log(`${max} ${middle} ${min}`);