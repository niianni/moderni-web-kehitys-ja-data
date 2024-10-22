let word = process.argv[2];
let alphabet = ["a", "b", "c", "d", "e", 
  "f", "g","h", "i", "j", "k", "l", "m", 
  "n", "o", "p", "q", "r", "s", "t", "u", 
  "v", "w", "x", "y", "z"];

let letters = word.split("");

const toIndex = letters.map( char => {
  for ( let i = 0; i < alphabet.length; i++ ) {
    if ( char === alphabet[i].toString() ) {
      return (i + 1);
    }
  }
});

console.log(toIndex.join(""));