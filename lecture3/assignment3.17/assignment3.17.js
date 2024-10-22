/* Ohjelma ottaa komentorivisyötteenä kaksi kirjainta sekä tekstin. 
Ohjelma korvaa kaikki ensimmäisen kirjaimen esiintymät toisella annetulla kirjaimella
annetussa tekstissä. Lopuksi ohjelma tulostaa tekstin, jossa kirjaimet on vaihdettu.*/

let char1 = process.argv[2];
let char2 = process.argv[3];
let inputArr = process.argv.slice(4);
let inputText = "";

inputArr.forEach(element => {
  inputText += element + " ";
});

inputText = inputText.slice(1, -2);

inputText = inputText.replaceAll(char1, char2);
console.log(inputText);