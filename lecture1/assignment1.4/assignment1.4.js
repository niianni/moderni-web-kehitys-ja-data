let str1 = "Hei, minun etunimeni on Niina";
let str2 = "Sukunimeni on Ahola";

//task 1
let str_sum = `${str1} ${str2}`;
console.log(`Molemmat stringit yhdistettynä on: ${str_sum}`);

//task2
console.log(`Ensimmäisen stringin pituus: ${str1.length}`);
console.log(`Toisen stringin pituus: ${str2.length}`);

//task 3
let avgLenght = (str1.length + str2.length)/2; 
console.log(`Pituuksien keskiarvo on ${avgLenght}`);

//task4 
console.log(`Ensimmäinen stringi isoina kirjaimina: ${str1.toUpperCase()}`);

//task5
console.log(`Toisen stringin ensimmäinen kirjain on ${str2.charAt(0)} ja viimeinen kirjain on ${str2.charAt(str2.length-1)}`);