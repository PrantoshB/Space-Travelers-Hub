import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { fetchRockets } from '../redux/rockets/rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <>
      {rockets.map((rocket) => (
        <Rocket
          image={rocket.image}
          key={rocket.id}
          title={rocket.name}
          description={rocket.description}
        />
      ))}
    </>

  );
};

export default Rockets;
