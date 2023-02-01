import { createAsyncThunk } from '@reduxjs/toolkit';
import missionsService from '../../services/missions';

const FETCH_MISSIONS = 'FETCH_MISSIONS';
const initialState = {
  status: 'idle',
  missions: [],
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        ...state,
        status: 'succeeded',
        missions: action.payload,
      };
    default:
      return state;
  }
};

export const getMissionsAsync = createAsyncThunk(FETCH_MISSIONS, async (arg, thunkAPI) => {
  const payload = await missionsService.getAllMissions();
  thunkAPI.dispatch({ type: FETCH_MISSIONS, payload });
});

export default missionsReducer;
