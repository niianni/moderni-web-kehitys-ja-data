let str = process.argv[2];
let words = str.split(' ');

/**Reverses any given word
 * 
 * @param {string} str to be reversed 
 * @returns {string} which is str reversed
 * @example reverseString("Hello") returns "olleH"
*/
function reverseString(str) {
  let newString = ''; 
  for (let i = str.length - 1; i >= 0; i--) { 
    newString += str[i];
  }
  return newString;
}

const reversed = words.map( word => reverseString(word));

console.log(reversed.join(' '));