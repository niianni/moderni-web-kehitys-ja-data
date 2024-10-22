let lastName = "Korhonen";
let age = 32;
let isDoctor = false; 
let sender = "Virtanen"; 

let title;
let lastChar;
let nextAge = (age + 1);
nextAge = nextAge.toString();
let ageText = nextAge;

if (isDoctor) {
  title = "Dr.";
} else {
  title = "Mx.";
}

lastChar = nextAge.charAt(nextAge.length - 1);

switch(lastChar) {
case "1":
  ageText += "st";
  break;
case "2":
  ageText += "nd";
  break;
case "3":
  ageText += "rd";
  break; 
}

if (ageText === nextAge) {
  ageText += "th";
}

console.log(`Dear ${title} ${lastName} \n\nCongratulations on your ${ageText} birthday! Many happy returns!\n\nSincerely,\n${sender}\n`);
