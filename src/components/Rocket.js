import PropTypes from 'prop-types';
import './Rocket.css';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocket';

const Rocket = ({
  id, title, description, image, reserved, reservedtext,
}) => {
  const dispatch = useDispatch();
  const reserveHandler = () => {
    dispatch(reserveRocket(id));
  };
  return (
    <div className="rocket">
      <img src={image} alt={title} />
      <div className="title-desc">
        <h3>{title}</h3>
        <p>
          <span id={reserved ? 'reserved' : 'not-reserved'}>{reservedtext}</span>
          {description}
        </p>
        <button id={reserved ? 'cancel' : 'reserve'} type="button" onClick={reserveHandler}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  reservedtext: PropTypes.string.isRequired,
};

export default Rocket;
