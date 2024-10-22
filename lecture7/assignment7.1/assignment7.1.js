/* Ohjelma tulostaa 3, 2, 1, GO! siten, että jokaisen 
tulosteen välissä on 1 sekunti.
*/
let waitFunction = (time, func) => {
    setTimeout(() => { func() }, time);
};

console.log("3");
waitFunction(1000, () => {
    console.log("2");
    waitFunction(1000, () => {
        console.log("1");
        waitFunction(1000, () => {
            console.log("GO!");
        })
    })
});
