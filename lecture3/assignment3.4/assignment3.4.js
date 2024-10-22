// 0 100 200 300 ... 1000
for (let i = 0; i <= 10; i++) { 
  console.log(i*100);
}

// 1 2 4 8 16 32 64 128
let number = 1;
for (let i = 0; i < 8; i++) { 
  console.log(number);
  number = number*2;
}

// 3 6 9 12 15
for (let i = 3; i <= 15; i+=3) { 
  console.log(i);
}

// 9 8 7 6 5 4 3 2 1 0
for (let i = 1; i <= 10; i++) { 
  console.log(10-i);
}

// 1 1 1 2 2 2 3 3 3 4 4 4 
for (let i = 1; i < 5; i++) { 
  console.log(i);
  console.log(i);
  console.log(i);
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for (let i = 0; i < 3 ; i++) { 
  for (let j = 0; j <= 4; j++) {
    console.log(j);
  }
}