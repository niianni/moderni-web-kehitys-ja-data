/*Ohjelma ottaa komentoriviltä kaksi lukua; henkilömäärä sekä ryhmäkoko. 
Ohjelma laskee, montako ryhmää kyseisestä henkilömäärästä tulee. Vain yksi ryhmä saa olla 
pienempi kuin annettu ryhmäkoko.
 */

let people = process.argv[2];
let groupSize = process.argv[3];
let groupCount = 0;

for (let i = people; i > 0; i-=groupSize) {
  groupCount += 1;
}

console.log(`Number of groups: ${groupCount}`);