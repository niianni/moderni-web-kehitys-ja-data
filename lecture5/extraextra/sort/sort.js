import { characters } from './array.js';

//1. Sort by name
const alphabetical = characters.sort( (a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    return 1;
} );
console.log(alphabetical);

//2. Sort by mass
const mass = characters.sort( (a, b) => {
    if (Number(a.mass) < Number(b.mass)) {
        return -1;
    }
    return 1;
} );
console.log(mass);

//3. Sort by height
const height = characters.sort( (a, b) => {
    if (Number(a.height) < Number(b.height)) {
        return -1;
    }
    return 1;
} );
console.log(height);

//4. Sort by gender
const gender = characters.sort( (a, b) => {
    if (a.gender < b.gender) {
        return -1;
    }
    return 1;
} );
console.log(gender);
