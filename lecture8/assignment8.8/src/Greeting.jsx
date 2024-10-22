import PropTypes from 'prop-types';

const Greeting = (props) => {
    const {fullName, age} = props;

    return (
        <p>My name is {fullName} and I am {age} years old</p>
    );
};

export default Greeting;

Greeting.propTypes = {
    fullName: PropTypes.string,
    age: PropTypes.number
}