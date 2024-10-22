/* Ohjelma ottaa komentorivisyötteenä kaksi lukua (a ja b) sekä mahdollisen salasanan (c).
Jos luvut ovat yhtä suuret ja salasana on 'hello world', ohjelma onnittelee salasanan arvaamisesta.
Ohjelma kertoo myös lukujen suuruussuhteen. */

let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4] + " " + process.argv[5];

if ( a === b ) {
  if ( c === "hello world") {
    console.log("yay, you guessed the password");
  } else {
    console.log("they are equal");
  }
} else if ( a < b ) {
  console.log("b is greater");
} else if ( a > b ) {
  console.log("a is greater");
}