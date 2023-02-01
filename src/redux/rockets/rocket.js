import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKETS = ' FETCH_ROCKETS';
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
    }));
    dispatch({
      type: FETCH_ROCKETS,
      payload: rockets,
    });
  },
);

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
