import { characters } from './array.js';


//1. Characters with mass greater than 100
const heavy = characters.filter( char => char.mass > 100 );
console.log(heavy);

//2. Characters with height less than 200
const short = characters.filter( char => char.height < 200 );
console.log(short);

//3. All male characters
const male = characters.filter( char => char.gender === 'male' );
console.log(male);

//4. All female characters
const female = characters.filter( char => char.gender === 'female' );
console.log(female);
