let style = process.argv[2];
let input = process.argv.slice(3);
let text = "";

input.forEach(element => {
  text += element + " ";
});

text = text.slice(1,-2);

if ( style === "upper") {
  console.log(text.toUpperCase());
} else if ( style === "lower" ) {
  console.log(text.toLowerCase());
} else {
  console.log("Unknown style. Only 'upper' and 'lower' available.");
}