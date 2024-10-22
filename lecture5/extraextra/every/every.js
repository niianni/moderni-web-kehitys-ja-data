import { characters } from './array.js';

//1. Does every character have blue eyes?
const justBlue = characters.every( cur => cur.eye_color === 'blue');
console.log('Every character has blue eyes');
console.log(justBlue);

//2. Does every character have mass more than 40?
const massOver40 = characters.every( cur => Number(cur.mass) > 40);
console.log('Every character weights more than 40');
console.log(massOver40);

//3. Is every character shorter than 200?
const shorter = characters.every( cur => Number(cur.height) < 200);
console.log('Every charater is shorter than 200');
console.log(shorter);

//4. Is every character male?
const isMale = characters.every( cur => cur.gender === 'male');
console.log('Every character is male');
console.log(isMale);
