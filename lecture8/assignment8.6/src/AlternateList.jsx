import PropTypes from 'prop-types';

const AlternateList = (props) => {
    const namelist = props.names;
    
    return (
    <p>
        {namelist.map((person, index) => {
            if(index % 2 === 0) {
                return (<p key={person}>
                    <b>{person}</b>
                    </p>)
            } else {
                return (<p key={person}>
                    <i>{person}</i>
                    </p>)
            }
        })}
    </p>);
}

export default AlternateList


AlternateList.propTypes = {
  names: PropTypes.array
}
