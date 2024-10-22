import { useState } from 'react'
import './App.css'

function App() {
  const [bingoNumbers, setBingoNumbers] = useState([]);

  const addBingoNumber = () => {
    const randomNumber = Math.floor(Math.random() * 74 + 1);

    if (bingoNumbers.some(number => number === randomNumber)) {
      addBingoNumber();
    } else {
      setBingoNumbers([...bingoNumbers, randomNumber]);
    }
  };

  const resetGame = () => {
    setBingoNumbers([]);
  }


  return (
    <p className="game">
      <h1>Bingo</h1>
      <button onClick={addBingoNumber}>+</button>
      <button onClick={resetGame}>Reset</button>
      <p className="allBingoBalls">
        {bingoNumbers.map(num => (<p className="bingoBall" key="num">{num}</p>))}
      </p>
    </p>
  )
}

export default App
