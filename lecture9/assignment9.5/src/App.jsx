import './App.css'
import { useState } from 'react';

//ei vielä console.logita feedback typeä
const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [feedback, setFeedback] = useState('');

  const clickSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${firstName} ${lastName}\nEmail: ${email}\nFeedback: ${feedback}\nType of feedback is: ${selectedType}`);
  }

  const resetAll = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setFeedback('');
  }

  return (
    <>
      <h1>Feedback form</h1>
      <form>
        <div>
          <input type="radio" id="feedback" name="feedbackType" value="feedback" checked={selectedType === "feedback"} onChange={e => setSelectedType(e.target.value)}></input>
          <label htmlFor="feedback">Feedback</label>
          <input type="radio" id="suggestion" name="feedbackType" value="suggestion" checked={selectedType === "suggestion"} onChange={e => setSelectedType(e.target.value)}></input>
          <label htmlFor="suggestion">Suggestion</label>
          <input type="radio" id="question" name="feedbackType" value="question" checked={selectedType === "question"} onChange={e => setSelectedType(e.target.value)}></input>
          <label htmlFor="question">Question</label>
        </div>
        <div>
          <label htmlFor="feedbackText">Feedback: </label><br/>
          <textarea id="feedbackText" name="feedbackText" rows="4" cols="50" onChange={e => setFeedback(e.target.value)}></textarea>
        </div>
        <div>
          <label htmlFor="firstname">First name: </label>
          <input type="text" id="firstname" name="firstname" onChange={e => setFirstName(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="lastname">Last name: </label>
          <input type="text" id="lastname" name="lastname" onChange={e => setLastName(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)}></input>
        </div>
        <div>
          <button type="submit" onClick={e => clickSubmit(e)}>Submit</button>
          <button onClick={() => resetAll}>Reset</button>
        </div>
      </form>
    </>
  )
}

export default App
