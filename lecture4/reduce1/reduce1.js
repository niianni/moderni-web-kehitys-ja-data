const array = [1,2,3,4,5];

function total(arr) {
    const sum = arr.reduce( (acc, cur) => {
        return acc + cur;
    }, 0 );
    return sum;
}
 
console.log(total(array));