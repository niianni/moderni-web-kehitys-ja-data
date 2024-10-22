import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [numbers, setNumbers] = useState([]);

  const saveNumber = () => {
    let newNumber;
    if (!text.includes('+') && !text.includes('-')) {
      newNumber = Number(text);
    } else {
      let index = text.lastIndexOf('+');
      newNumber = Number(text.substring(index + 1));
      //etsi missä kohtaa on viimeisin plusmerkki ja katkaise siitä uusi numero
    }
    setNumbers([...numbers, newNumber]);
  };

  const calculate = () => {
    const sum = numbers.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    setText(sum);
  }


  return (
    <>
    <div>
      <p>{text}</p>
      <button onClick={() => setText(`${text}1`)}>1</button>
      <button onClick={() => setText(`${text}2`)}>2</button>
      <button onClick={() => setText(`${text}3`)}>3</button>
      <button onClick={() => setText(`${text}4`)}>4</button>
      <button onClick={() => setText(`${text}5`)}>5</button>
      <button onClick={() => setText(`${text}6`)}>6</button>
      <button onClick={() => setText(`${text}7`)}>7</button>
      <button onClick={() => setText(`${text}8`)}>8</button>
      <button onClick={() => setText(`${text}9`)}>9</button>
      <button onClick={() => setText(`${text}0`)}>0</button>
    </div>
    <div>
      <button onClick={() => {
        saveNumber();
        setText(`${text}+`);
      }}>+</button>
      <button onClick={() => setText(`${text}-`)}>-</button>
      <button onClick={() => {
        saveNumber();
        calculate();
      } }>=</button>
      <button onClick={() => setText('0')}>Reset</button>
    </div>
    </>
  )
}

export default App
