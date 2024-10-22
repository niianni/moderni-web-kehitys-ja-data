
const arr1 = ["this", "is", "list", "of", "strings"];
const sep1 = ".";


function joinWithSeparator(arr, separator) {
  return arr.reduce((acc, cur) => {
    return acc + separator + cur;
  }); 
}
console.log(joinWithSeparator(arr1, sep1));