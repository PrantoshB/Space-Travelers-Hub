import thunk from 'redux-thunk';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocket';
import missionsReducer from './missions/missions';

const store = configureStore(
  {
    reducer: {
      rocket: rocketReducer,
      missions: missionsReducer,
    },
  },
  applyMiddleware((thunk)),
);

export default store;
