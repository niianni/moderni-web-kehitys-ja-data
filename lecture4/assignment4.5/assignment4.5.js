//1
/*
const superSum = (callBack) => {
  let sum = 0;
  for (let i = 10000000000; i > 0; i--) {
    sum += i;
  }
  callBack(sum);
};
*/


//2
const superSum2 = (callBack) => {
  let sum = 0;
  for (let i = 1000000000; i > 0; i--) {
    if ( i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      sum += i;
    }
  }
  callBack(sum);
};
superSum2(result => console.log(result));
