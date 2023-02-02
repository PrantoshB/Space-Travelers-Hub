import { createAsyncThunk } from '@reduxjs/toolkit';
import dragonsService from '../../services/dragons';

const FETCH_DRAGONS = 'FETCH_DRAGONS';
const RESERVE_DRAGON = 'RESERVE_DRAGON';
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
    case RESERVE_DRAGON:
      return {
        ...state,
        dragons: action.payload,
      };
    default:
      return state;
  }
};

export const getDragonsAsync = createAsyncThunk(
  FETCH_DRAGONS,
  async (arg, thunkAPI) => {
    const payload = await dragonsService.getAllDragons();
    thunkAPI.dispatch({ type: FETCH_DRAGONS, payload });
  },
);

export const reserveDragon = (id) => (dispatch, getState) => {
  const state = getState().dragons.dragons;
  const newState = state.map((dragon) => {
    if (dragon.id !== id) return dragon;
    const reserved = !dragon.reserved;
    return { ...dragon, reserved };
  });
  dispatch({
    type: RESERVE_DRAGON,
    payload: newState,
  });
};
export default dragonsReducer;
