import { characters } from './array.js';

//1. Array of all names
const names = characters.map( char => {
    return char.name;
} );
console.log(names);

//2. Array of all heights
const heights = characters.map ( char => {
    return char.height;
} );
console.log(heights);

//3. Array of objects with just name and height properties
const nameHeightObj = characters.map( char => {
    return {name: char.name, height: char.height};
} );
console.log(nameHeightObj);

//4. Array of all first names
const firstNames = characters.map( char => {
    return char.name.split(' ')[0];
} );
console.log(firstNames);
