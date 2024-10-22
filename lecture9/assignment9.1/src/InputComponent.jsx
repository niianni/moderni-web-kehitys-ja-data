import PropTypes from 'prop-types';
import { useState } from "react";

const InputComponent = ({addNumber}) => {
    const [number, setNumber] = useState("");

    const handleChange = (event) => {
        setNumber(event.target.value);
    }

    const handleAddNumber = () => {
        addNumber(number);
        setNumber('');
    }

    return (
        <>
        <input type="text" value={number} onChange={handleChange} placeholder='040 123 4567'></input>
        <div className="addButton">
            <button onClick={handleAddNumber}>Add number</button>
        </div>
        </>
    )
}

export default InputComponent

InputComponent.propTypes = {
  addNumber: PropTypes.func
}
