const arr = ["banaani", "omena", "mandariini", "appelsiini", "kurkku", "tomaatti", "peruna"];

console.log(`3rd item is ${arr[2]}`);
console.log(`5th item is ${arr[4]}`);
console.log(`Length of the array is ${arr.length}`);

//järjestä aakkosjärjestykseen ja tulosta
arr.sort();
console.log(arr);

//lisää sipuli ja tulosta
arr.push("sipuli");
console.log(arr);

//EXTRA: poista ensimmäinen ja tulosta
arr.shift();
console.log(arr);

//EXTRA: tulosta jokainen listan elementti
arr.forEach(printValue);

function printValue(item) {
  console.log(item);
}

//EXTRA: tulosta jokainen elementti, joka sisältää kirjaimen r
arr.forEach(checkAndPrint);

function checkAndPrint(item) {
  if (item.includes("r")) {
    console.log(item);
  }
}