let counter = 0;

function findSteps(n) {
    if (n === 1) {
        return counter;
    } else {
        counter++;
        if (n % 2 === 0) {
            return findSteps(n / 2);
        } else {
            return findSteps((n * 3 + 1));
        }
    }
}

console.log(findSteps(4));