import { useState } from 'react'
import './App.css'
import InputComponent from './InputComponent';


const App = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  const numbersList = phoneNumbers.map(number => {
    return (<p key={number}>{number}</p>)
  });

  const addNumber = (number) => {
    setPhoneNumbers([...numbersList, number]);
  }

  return (
    <>
      <h1>Phonebook</h1>
      <div className="list">
        {numbersList}
      </div>
      <InputComponent addNumber={addNumber}/>
    </>
  )
}

export default App
