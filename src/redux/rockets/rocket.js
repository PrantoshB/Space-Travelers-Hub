import { createAsyncThunk } from '@reduxjs/toolkit';
import getRockets from '../../services/rockets';

const FETCH_ROCKETS = ' FETCH_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKETS';
const initialState = {
  status: 'idle',
  rockets: [],
};

export const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (post, thunkAPI) => {
    const payload = await getRockets();
    thunkAPI.dispatch({
      type: FETCH_ROCKETS,
      payload,
    });
  },
);
export const reserveRocket = (id) => (dispatch, getState) => {
  const state = getState().rockets.rockets;
  const newState = state.map((rocket) => {
    if (rocket.id !== id) return rocket;
    const reserved = !rocket.reserved;
    return { ...rocket, reserved };
  });
  dispatch({
    type: RESERVE_ROCKET,
    payload: newState,
  });
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return {
        ...state,
        status: 'succeeded',
        rockets: action.payload,
      };
    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: action.payload,
      };
    default:
      return state;
  }
};

export default rocketReducer;
