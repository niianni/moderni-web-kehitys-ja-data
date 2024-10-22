//a
const sum1 = (num1, num2) => {
  return num1 + num2;
};
console.log(sum1(1,2));

//b
const avr = (num1, num2, num3) => {
  return ( num1 + num2 + num3 ) / 3;
};
console.log(avr(1,2,3));

//c 
const len = (str) => {
  return str.length;
};
console.log(len("Hei minä opin!"));

//d 
const arrAvg = (numArr) => {
  let sum = 0;
  numArr.forEach(element => sum += element);
  return sum/(numArr.length);
};
console.log(arrAvg([1,2,3,4,5,6,7,8,9,10]));