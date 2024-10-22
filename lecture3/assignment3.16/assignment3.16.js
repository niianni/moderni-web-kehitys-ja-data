let originalString = process.argv.slice(2);
let finalString = "";

console.log(originalString);

originalString.pop();

originalString.forEach(element => {
  finalString += element + " ";
});

finalString = finalString.slice(1);

console.log(finalString);