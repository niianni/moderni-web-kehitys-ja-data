import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [seconds, setSeconds] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [timerOn, setTimerOn] = useState(false);
  
  //puuttuu vielä Start/Stop -ominaisuus

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(seconds => Number(seconds) + 1);
    }, 1000);
    if(seconds === 60) {
      setMinutes(minutes => Number(minutes) + 1);
      setSeconds(seconds => Number(seconds) - 60);
    }
    return (() => clearTimeout(timer));
  }, [seconds]);

  const resetTime = () => {
    setSeconds('0');
    setMinutes('0');
  };

  const addMinute = () => {
    setMinutes(minutes => Number(minutes) + 1);
  };

  const addSecond = () => {
    setSeconds(seconds => Number(seconds) + 1);
  };

  const startStop = () => {
    setTimerOn(() => !timerOn);
  };


  return (
      <p>
        <h1>Timer</h1>
        {minutes} minutes and {seconds} seconds
        <div>
          <div>
            <button onClick={addMinute}>Add minute</button>
            <button onClick={addSecond}>Add second</button>
          </div>
          <button onClick={resetTime}>Reset</button>
          <button onClick={startStop}>Start/Stop</button>
        </div>
      </p>
    )
}

export default App;
