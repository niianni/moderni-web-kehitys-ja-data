let word = process.argv[2];

/**Reverses any given word
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

if ( word === reverseString(word) ) {
  console.log(`Yes, '${word}' is a palindrome`);
} else {
  console.log(`No, '${word}' is not a palindrome`);
}