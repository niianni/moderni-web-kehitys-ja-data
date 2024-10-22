let balance = 32;
let isActive = true;
let checkBalance = true;

if (checkBalance) {
  if (isActive && balance > 0) {
    console.log(`Your balance is ${balance}€.`);
  } else if (!isActive) {
    console.log("Your account is not active.");
  } else if (balance === 0) {
    console.log("Your account is empty.");
  } else {
    console.log("Yout balance is negative.");
  }
} else {
  console.log("Have a nice day!");
}