import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKETS = ' FETCH_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKETS';
const initialState = [];
const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (post, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();
    const rockets = data.map((item) => ({
      id: item.rocket_id,
      name: item.rocket_name,
      description: item.description,
      image: item.flickr_images[0],
      reserved: false,
    }));
    dispatch({
      type: FETCH_ROCKETS,
      payload: rockets,
    });
  },
);

export const reserveRocket = (id) => (dispatch, getState) => {
  const state = getState().rockets;
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
      return action.payload;
    case RESERVE_ROCKET:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
