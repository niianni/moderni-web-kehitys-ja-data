import { useState } from 'react'

const App = () => {
  const [input, setInput] = useState("");
  const [shownInput, setShownInput] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const showInput = () => {
    setShownInput(input);
  }

  return (
    <>
    <h1>Your string is: {shownInput}</h1>
    <input value={input} onChange={onInputChange}/>
    <button onClick={showInput}>Submit</button>
    </>
  )
}

export default App
