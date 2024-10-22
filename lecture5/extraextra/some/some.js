import { characters } from './array.js';

//1. Is there at least one male character?
const males = characters.some( cur => cur.gender === 'male' );
console.log(males);

//2. Is there at least one character with blue eyes?
const blueEyes = characters.some( cur => cur.eye_color === 'blue' );
console.log(blueEyes);

//3. Is there at least one character taller than 200?
const tallOnes = characters.some( cur => Number(cur.height) > 200 );
console.log(tallOnes);

//4. Is there at least one character that has mass less than 50?
const skinnyOnes = characters.some( cur => Number(cur.mass) < 50 );
console.log(skinnyOnes);
