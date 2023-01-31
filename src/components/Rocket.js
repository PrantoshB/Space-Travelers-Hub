import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocket';

const Rocket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  });
  return (
    <div>
      <h2>Rocket Component</h2>
    </div>
  );
};

export default Rocket;
