
function intBetween(min, max) {
  //ceil palauttaa pienimmän kokonaisluvun, joka on
  //suurempi tai yhtä suuri kuin annettu luku
  const minInt = Math.ceil(min);
  //floor palauttaa suurimman kokonaisluvun, joka on
  //pienempi tai yhtä suuri kuin annettu luku
  const maxInt = Math.floor(max);
  //palauttaa satunnaisen kokonaisluvun välillä [min, max[
  return Math.floor( Math.random() * ( maxInt - minInt ) + minInt );
}

console.log(intBetween(1,10));
