import PropTypes from 'prop-types';

const Planets = (props) => {

    const rows = props.planetList.map(obj => {
        return (
            <tr key={obj.name}>
                <td>{obj.name}</td>
                <td>{obj.climate}</td>
            </tr>
        );
    });   

    return (
        <>
        <table>
            <tr>
                <th>Planet</th>
                <th>Climate</th>
            </tr>
            {rows}
        </table>
        </>
    )
};

export default Planets;

Planets.propTypes = {
    planetList: PropTypes.array
};
