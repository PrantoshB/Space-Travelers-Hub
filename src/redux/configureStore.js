import thunk from 'redux-thunk';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocket';

const store = configureStore(
  {
    reducer: {
      rocket: rocketReducer,
    },
  },
  applyMiddleware((thunk)),
);

export default store;
