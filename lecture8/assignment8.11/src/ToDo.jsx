import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const ToDo = ({task, remove, toggle}) => {
  
  return (
  <div key={v4()}>
      <input type="checkbox" checked={task.done} onChange={() => toggle(task.task)}></input>
      {task.task} 
      <button onClick={() => remove(task.task)}>Remove</button>
  </div>
  )
}

export default ToDo;


ToDo.propTypes = {
    task: PropTypes.object,
    remove: PropTypes.func,
    toggle: PropTypes.func
  }
