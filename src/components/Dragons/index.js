import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './style.css';
import { reserveDragon } from '../../redux/dragons/dragons';

const Dragon = ({
  id, title, type, image, reserved, reservedtext,
}) => {
  const dispatch = useDispatch();
  const reserveHandler = () => {
    dispatch(reserveDragon(id));
  };

  return (
    <div className="dragon" id={id}>
      <img src={image} alt={title} />
      <div className="title-desc">
        <h3>{title}</h3>
        <p>
          <span id={reserved ? 'reserved' : 'not-reserved'}>
            {reservedtext}
          </span>
          {type}
        </p>
        <button
          id={reserved ? 'cancel' : 'reserve'}
          type="button"
          onClick={reserveHandler}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
        </button>
      </div>
    </div>
  );
};

Dragon.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  reservedtext: PropTypes.string.isRequired,
};

export default Dragon;
