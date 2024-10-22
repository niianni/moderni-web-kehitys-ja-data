import { useState, useEffect } from 'react'
import './App.css'


const catUrl = "https://cataas.com/cat";

const App = () => {
  const [url, setUrl] = useState(catUrl);
  const [text, setText] = useState('');

  const handleClick = () => {
    if (text !== "") {
      setUrl(`${catUrl}/says/${text}`);
      setText('');
    } else {
      setUrl(`${catUrl}`);
    } 
  }

  return (
    <>
      <h1>Get new pic by refreshing the page</h1>
      <img src={url}/>
      <div>
        <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
        <button onClick={handleClick}>Make the cat say it</button>
      </div>
    </>
  )
}

export default App
