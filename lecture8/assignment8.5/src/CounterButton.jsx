import { useState } from "react";

const CounterButton = () => {
    const [number, setNumber] = useState(0);

    const addOne = (num) => {
        setNumber(num + 1);
    }

    return (
        <>
            <button onClick={addOne(number)}>{number}</button>
        </>
    )
}

export default CounterButton