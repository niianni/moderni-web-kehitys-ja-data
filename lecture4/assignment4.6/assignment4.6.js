let answer = 1;

const factorial = (n) => {
  if (n > 0) {
    answer = n*factorial(n-1);
  } 
  return answer;
};

console.log(factorial(4));