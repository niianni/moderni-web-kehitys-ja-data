const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

//1. Create new array with only numbers that are divisible by tree
const divByThree = arr.filter(item => item % 3 === 0);
console.log(divByThree);

//2. Create a new array from original array (arr), 
//   where each number is multiplied by 2
const multiplyByTwo = arr.map(item => item * 2);
console.log(multiplyByTwo);

//3. Sum all of the values in the array using the array method reduce
const sumAll = arr.reduce((acc, cur) => acc + cur , 0);
console.log(sumAll);
