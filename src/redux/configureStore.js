import thunk from 'redux-thunk';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocket';
import missionsReducer from './missions/missions';
import dragonsReducer from './dragons/dragons';

const store = configureStore(
  {
    reducer: {
      rockets: rocketReducer,
      missions: missionsReducer,
      dragons: dragonsReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
