import Bank from "./Bank.js";

console.log("AVATAAN PANKKI JA LISÄTÄÄN SINNE KOLME TILIÄ. KAKSI NIINALLE JA YKSI HELILLE.");
const testBank = new Bank("Kroisos pennasen pankki");
let niinaID1 = testBank.openAccount("Niina");
let niinaID2 = testBank.openAccount("Niina");
let heliID = testBank.openAccount("Heli");
console.log(testBank);

console.log("LISÄTÄÄN NIINAN TILILLE 1 250E");
//testBank.deposit(niinaID1, 250);
console.log(testBank.deposit(niinaID1, 250));
console.log(testBank);

console.log("OTETAAN NIINAN TILILTÄ 2 POIS 50E");
testBank.withdraw(niinaID2, 50);
console.log(testBank);

console.log("PALJONKO TILEILLÄ ON RAHAA?");
console.log(testBank.checkBalance(niinaID1));
console.log(testBank.checkBalance(niinaID2));
console.log(testBank.checkBalance(heliID));

console.log("KENELLÄ KAIKILLA ON TILIT?");
console.log(testBank.customers());

console.log("PALJONKO TILEILLÄ ON RAHAA YHTEENSÄ?");
console.log(testBank.totalValue());

console.log("SIIRRETÄÄN NIINA1 TILILTÄ NIINA2 TILILLE 50 EUROA");
console.log(testBank.transfer(niinaID1, niinaID2, 50));
console.log(testBank);

console.log("SULJETAAN NIINAN TILI1");
testBank.closeAccount(niinaID1);
console.log(testBank);