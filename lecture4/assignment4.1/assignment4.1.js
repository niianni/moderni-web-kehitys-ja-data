//a
function sayHello() {
  console.log("Hello World");
}
sayHello();

//b 
function greet(fullname) {
  console.log(`Hello ${fullname}`);
}
greet("Olivia Haavisto");

//c 
function sum(num1, num2, num3) {
  console.log(num1+num2+num3);
}
sum(1,2,3);

//d 
function printInfo(fullname, age=18) {
  console.log(`${fullname} ${age}`);
}
printInfo("Kaarina Virolainen");