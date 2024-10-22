let arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten(arr) {
    const flatArray = arr.reduce( (acc, cur) => {
        return acc.concat(cur);
    }, []);
    return flatArray; 
}

console.log(flatten(arrays)); 