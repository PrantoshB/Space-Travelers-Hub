import { createAsyncThunk } from '@reduxjs/toolkit';
import dragonsService from '../../services/dragons';

const FETCH_DRAGONS = 'FETCH_DRAGONS';
const initialState = {
  status: 'idle',
  dragons: [],
};

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRAGONS:
      return {
        ...state,
        status: 'succeeded',
        dragons: action.payload,
      };
    default:
      return state;
  }
};

export const getDragonsAsync = createAsyncThunk(FETCH_DRAGONS, async (arg, thunkAPI) => {
  const payload = await dragonsService.getAllDragons();
  thunkAPI.dispatch({ type: FETCH_DRAGONS, payload });
});

export default dragonsReducer;
