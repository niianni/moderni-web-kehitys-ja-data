import PropTypes from 'prop-types';

const Instrument = (props) => {
    const {name, image, price} = props
    return (<div className='instrument'>
        <img src={image} alt={name}></img>
        <p className='name'>{name}</p>
        <p className='price'>{price} €</p>
    </div>)
}

export default Instrument;

Instrument.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
}
