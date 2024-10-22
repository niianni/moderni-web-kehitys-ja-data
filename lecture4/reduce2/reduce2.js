const array = [1,2,3,4,5,10,11];

function stringConcat(arr) {
    const concat = arr.reduce((acc, cur) => {
        return acc + cur;
    },"");
    return concat;
}
 
console.log(stringConcat(array)); 
