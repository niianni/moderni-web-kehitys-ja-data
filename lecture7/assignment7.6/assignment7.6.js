function largest(array) {
    let largest = array[0];
    
    array.map((number) => {
        if (number > largest) {
            largest = number;
        }
    })
    return largest;   
};
console.log(largest([1, 2, 30, 25, 4, 5, 6]));


function secondLargest(array) {
    let largeIndex = array.findIndex((num) => num === largest(array));
    array.splice(largeIndex, 1);
    return largest(array);
}
console.log(secondLargest([1, 2, 30, 25, 4, 5, 6]));
