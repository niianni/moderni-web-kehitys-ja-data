const competitors = ['Julia', 'Mark', 'Spencer', 'Ann' , 'John', 'Joe'];
const ordinals = ['st', 'nd', 'rd', 'th'];

const outputs = competitors.map( ( person, index ) => {
  let placement = index + 1;
  let ordinal;
  if ( index <= 2 ) {
    ordinal = ordinals[index];
  } else {
    ordinal = ordinals[3];
  }
  return `${placement}${ordinal} competitor was ${person}`;
});

console.log(outputs);