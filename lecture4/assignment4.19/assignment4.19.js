const arr = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32];


function shuffle(array) {
  let currentIndex = array.length - 1;
  let randomIndex;
  
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    currentIndex--;
  }
  return array;
}

console.log(shuffle(arr));