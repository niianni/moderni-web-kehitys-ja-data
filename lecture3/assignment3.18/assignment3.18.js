import readline from "readline-sync";

let run = true;
let input = readline.question("Hi! I am a dumb chat bot You can check all the things I can do by typing 'help'.\n");
let name;
let botName = "Dumb Bot 432";
let newName;
let sure;
let counter = 0;

function getRandomTemp() {
  let min = 0; 
  let max = 30;
  return Math.round(Math.random() * ( max-min ) + min);
}

function randomGen() {
  let randomBoolean = Math.random() < 0.5;
  if (randomBoolean) {
    return "yes";
  } else {
    return "no";
  }
}

while ( run ) {
  if ( input === "help" ) {
    counter++;
    console.log(`
    -----------------------------
    Here\`s a list of commands that I can execute!
    
    help: Opens this dialog.
    hello: I will say hello to you
    botInfo: I will introduce myself
    botName: I will tell my name
    botRename: You can rename me
    forecast: I will forecast tomorrows weather 100% accurately
    quit: Quits the program.
    -----------------------------\n`);
  } else if ( input === "hello" ) {
    counter++;
    name = readline.question("What is your name?\n");
    console.log(`Hello there, ${name}\n`);
  } else if ( input === "botInfo" ) {
    counter++;
    console.log(`I am a dumb bot. You can ask me almost anything :). You have already asked me ${counter} questions.
    `);
  } else if ( input === "botName" ) {
    counter++;
    console.log(`My name is currently ${botName}. If you want to change it, type botRename.`);
  } else if ( input === "botRename" ) {
    counter++;
    newName = readline.question("Type my new name, please.\n");
    sure = readline.question(`Are you happy with name ${newName}?(yes/no)\n`);
    if ( sure.toLowerCase() === "yes" ) {
      botName = newName;
      console.log(`I was renamed ${botName}.\n`);
    } else {
      console.log(`Name not changed. My name is ${botName}.\n`);
    }
  } else if ( input === "forecast" ) {
    counter++;
    console.log("Tomorrows weather will be...");
    console.log(`Temperature: ${getRandomTemp()} celsius degree`);
    console.log(`Cloudy: ${randomGen()}`);
    console.log(`Sunny: ${randomGen()}`);
    console.log(`Wind: ${randomGen()}\n`);
  } else if ( input === "quit" ) {
    run = false;
    break;
  } else {
    console.log("Did not understand. You can check valid inputs with 'help'-command.");
  }
  input = readline.question();
}
