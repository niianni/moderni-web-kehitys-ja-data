const RandomNumber = () => {
    const randomInt = Math.floor(Math.random() * 100 + 1);
    return (
        <div>
            <h1>Random Number Generator</h1>
            <p>Your random number is: {randomInt}</p>
        </div>
        )
    }

export default RandomNumber;