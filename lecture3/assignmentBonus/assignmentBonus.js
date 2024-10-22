let n = 4;
let row1 = "&";
let row2 = "&";
let row3 = "&";
let row4 = "&";
let spaces1 = "";
let spaces2 = "";
let ind1 = 0;
let ind2 = 0;
let ind3 = n;

//level 1: vino pyramidi
for (let i = 0; i < n; i++) {
  console.log(row1);
  row1 = row1 + "&";
}

//level 2: pyramidi
for (let i = 0; i < n; i++) {
  for (let j = n; j > i ; j--) {
    spaces1 = spaces1 + " ";
  }
  console.log(`${spaces1}${row2}${spaces1}`);
  spaces1 = "";
  row2 = "&" + row2 + "&";
}

//level 3: sama while-luupeilla
//vino pyramidi
while (ind1 < n) {
  console.log(row3);
  row3 = row3 + "&";
  ind1++;
}

//pyramidi
//välilyöntejä riville tarvitaan n-ind2 määrä
while (ind2 < n) {
  ind3 = n-ind2;
  while (ind3 > 0) {
    spaces2 = spaces2 + " ";
    ind3--;
  }
  console.log(`${spaces2}${row4}${spaces2}`);
  row4 = "&" + row4 + "&";
  spaces2 = "";
  ind2++;
}

