/* Ohjelma ottaa komentorivisyötteenä kielen (fi, en, es) ja tulostaa 
Hello World! -tekstin annetulla kielellä. Jos kieltä ei anneta, käytetään kielenä englantia. */

let langCode = process.argv[2];

switch (langCode) {
case "fi":
  console.log("Hei maailma!");
  break;
case "en":
  console.log("Hello world!");
  break;
case "es":
  console.log("Hola Mundo!");
  break;
default: 
  console.log("Hello world!");
}