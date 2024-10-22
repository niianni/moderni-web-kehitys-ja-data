/*Luettelee luvut 1-100. Tulostaa Fizz, jos luku on jaollinen luvulla 3.
Tulostaa Buzz jos luku on jaollinen luvulla 5.
Tulostaa FizzBuzz jos luku on jaollinen sekä luvulla 3 että luvulla 5.
Jos luku ei ole kummallakaan jaollinen, ohjelma tulostaa luvun. */

for (let i = 1; i <= 100; i++) {
  if ( i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}