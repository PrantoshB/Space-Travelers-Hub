import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { fetchRockets } from '../redux/rockets/rocket';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.rockets);
  const { status, rockets } = data;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [dispatch, status]);
  return (
    <div className="rockets-wrapper">
      {rockets.map((rocket) => (
        <Rocket
          image={rocket.image}
          key={rocket.id}
          title={rocket.name}
          description={rocket.description}
          id={rocket.id}
          reservedtext={rocket.reserved ? 'Reserved' : ''}
          reserved={rocket.reserved}
        />
      ))}
    </div>

  );
};

export default Rockets;
