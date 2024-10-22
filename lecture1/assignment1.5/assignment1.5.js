let playerCount = 4;
let isStressed = true;
let hasIcecream = true;
let sunShines = true;
let rains = false;
let temperature = 20;
let seesSuzy = false;
let seesDan = true;
let isTuesday = true;

//a
if (playerCount === 4) {
    console.log("You are ready to play! Have a nice time.");
} else {
    console.log("You need 4 players");
}

//b
if(!isStressed || hasIcecream) {
    console.log("Mark is happy! :)");
} else {
    console.log("Mark is not happy. He needs to be less stressed or get some ice cream. :(");
}

//c
if (sunShines === true && rains === false && temperature >= 20) {
    console.log("It is beach day!");

} else {
    console.log("Weather is not nice. Stay in.");
}

//d 
if ((seesSuzy || seesDan) && !(seesSuzy && seesDan) && isTuesday) {
    console.log("Arin is happy! :)");

} else {
    console.log("Arin is sad.");
}