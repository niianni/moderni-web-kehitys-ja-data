import { useState } from "react";

const CounterButtons = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);

    const [sum, setSum] = useState(0);


    return (
        <>
            <button onClick={() => {
                setNumber1(number1 + 1); 
                setSum(sum + 1);
                }}>{number1}</button>
            <button onClick={() => {
                setNumber2(number2 + 1)
                setSum(sum + 1);
                }}>{number2}</button>
            <button onClick={() => {
                setNumber3(number3 + 1)
                setSum(sum + 1);
                }}>{number3}</button>
            <p >Sum is: {sum}</p>
        </>
    )
}

export default CounterButtons

