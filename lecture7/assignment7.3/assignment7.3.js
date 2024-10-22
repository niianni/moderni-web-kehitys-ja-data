
const getValue = async function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(Math.random())}, Math.random() * 1500)
    })
}

//use async and await
const getTwo = async function () {
    console.log(`${await getValue()}\n${await getValue()}`);
}; 
getTwo();

//use promise.then
getValue().then((val1) => {
    getValue().then((val2) => {
        console.log(`${val1}\n${val2}`);
    })
});
