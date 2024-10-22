import React, { useState } from 'react';
import './App.css';

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    
    //tarkastetaan ensin onko voittaja jo saatu tai onko kyseisessä ruudussa jo merkintä
    if (winner || board[index]) return;

    //merkataan pelilaudalle uusi merkki annettuun kohtaan
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    //vaihdetaan vuoro toiselle pelaajalle
    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextPlayer);

    //tarkastetaan, onko voittaja löytynyt
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        break;
      }
    }

    //tarkastetaan tuliko tasapeli
    if (!newBoard.includes(null) && !winner) {
      setWinner('draw');
    }
  };


  //tyhjennetään pelilauta ja pelitilanne
  const resetGame = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setCurrentPlayer('X');
    setWinner(null);
  };

  //Tulostetaan ruutu
  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  //Pelin tämänhetkinen tilanne (Kenen vuoro? Kuka on voittanut? Tuliko tasapeli?)
  const gameStatus = () => {
    if (winner) {
      if (winner === 'draw') {
        return 'It\'s a draw!';
      } else {
        return `Winner: ${winner}`;
      }
    } else {
      return `Current Player: ${currentPlayer}`;
    }
  };
  
  return (
    <div className="game">
      <div className="status">{gameStatus()}</div>
      <div className="board">
        {board.map((square, index) => (
          <div key={index} className="squareContainer">
            {renderSquare(index)}
          </div>
        ))}
      </div>
      <button className="resetButton" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;

