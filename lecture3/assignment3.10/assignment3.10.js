/* Ohjelma etsii kolmen komentorivisyötteenä annetun numeron väliltä suurimman ja pienimmän
ja tulostaa ne. Jos kaikki kolme ovat yhtäsuuria, ohjelma tulostaa sen. 
*/
let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);
let num3 = Number(process.argv[4]);


if ( num1 === num2 && num2 === num3 ) {
  console.log(`Numbers are all equal (value ${num1}).`);
} else if ( num1 >= num2 && num1 >= num3 ) { //num1 isoin
  console.log(`The first number (value ${num1}) is largest.`);
  if ( num2 < num3 ) {
    console.log(`The second number (value ${num2}) is smallest.`);
  } else {
    console.log(`The third number (value ${num3}) is smallest.`);
  }
} else if ( num2 >= num1 && num2 >= num3 ) { //num2 isoin
  console.log(`The second number (value ${num2}) is largest.`);
  if ( num1 < num3 ) {
    console.log(`The first number (value ${num1}) is smallest.`);
  } else {
    console.log(`The third number (value ${num3}) is smallest.`);
  }
} else if ( num3 >= num2 && num3 >= num1 ) { //num3 isoin
  console.log(`The third number (value ${num3}) is largest.`);
  if ( num2 < num1 ) {
    console.log(`The second number (value ${num2}) is smallest.`);
  } else {
    console.log(`The first number (value ${num1}) is smallest.`);
  }
}
