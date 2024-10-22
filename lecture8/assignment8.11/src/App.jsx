import { useState } from 'react';
import './App.css'
import ToDo from './ToDo';
import { v4 } from 'uuid';


const App = () => {
  const [input, setInput] = useState('');
  const [taskList, setTaskList] = useState([
    { task: "Siivous", done: false },
    { task: "Tiskaus", done: false }]);
  
  //päivitä tekstikenttää sitä mukaa kun syötettä kirjoitetaan
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  //lisää uusi tehtävä listalle
  const addTask = (task) => {
    if(input !== "") {
      const newList = [{task: task, done: false}, ...taskList]
      setTaskList(newList);
      setInput('');
    }
  }

  //merkitse tehtävä tehdyksi/tekemättömäksi
  const handleToggle = (taskToToggle) => {
    const newList = taskList.map((item) => {
      if (item.task === taskToToggle) {
        return ({task: taskToToggle, done: !item.done})
      } else {
        return (item);
      }
    });
    setTaskList(newList);
  }

  //poista tehtävä listalta
  const removeTask = (taskToRemove) => {
    const newTasks = taskList.filter(item => item.task !== taskToRemove);
    setTaskList(newTasks)
  }

  return ( 
    <div>
      <h1>ToDo -list</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={() => addTask(input)}>Add item</button>
      <div key={v4()}>
        {taskList.map(task => {
          return (<ToDo key={v4()} task={task} remove={removeTask} toggle={handleToggle}/>)
        })}
      </div>
    </div>
  );
}


export default App;

