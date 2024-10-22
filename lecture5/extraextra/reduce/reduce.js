import { characters } from './array.js';

//1. Total mass of all characters
const masses = characters.reduce( (acc, cur) => {
    return acc + Number(cur.mass);
}, 0 );
console.log(masses);

//2. Total height fo all characters
const heights= characters.reduce( (acc, cur) => {
    return acc + Number(cur.height);
}, 0 );
console.log(heights);

//3. Total number of characters in all the character names
const chars= characters.reduce( (acc, cur) => {
    return acc + cur.name.length;
}, 0 );
console.log(chars);

//4. Total number of characters by eye color
