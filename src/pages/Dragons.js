import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dragon from '../components/Dragons';
import { getDragonsAsync } from '../redux/dragons/dragons';
import './Dragons.css';

const Dragons = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dragons);
  const { status, dragons } = data;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getDragonsAsync());
    }
  }, [dispatch, status]);

  return (
    <div className="dragons-wrapper">
      {dragons.map((dragon) => (
        <Dragon
          image={dragon.image}
          key={dragon.id}
          title={dragon.name}
          type={dragon.type}
          id={dragon.id}
          reservedtext={dragon.reserved ? 'Reserved' : ''}
          reserved={dragon.reserved}
        />
      ))}
    </div>
  );
};

export default Dragons;
