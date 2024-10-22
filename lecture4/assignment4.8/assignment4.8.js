const words = [
  "city",
  "distribute",
  "battlefield",
  "relationship",
  "spread",
  "orchestra",
  "directory",
  "copy",
  "raise",
  "ice"
]; 
/**Reverses any given string
 * 
 * @param {string} str to be reversed 
 * @returns {string} which is str reversed
 * @example reverseString("Hello") returns "olleH"
 */
function reverseString(str) {
  let newString = ""; 
  for (let i = str.length - 1; i >= 0; i--) { 
    newString += str[i];
  }
  return newString;
}

const reverseWords = words.map(word => reverseString(word));

console.log(reverseWords);