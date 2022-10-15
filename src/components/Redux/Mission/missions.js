import { createAsyncThunk } from '@reduxjs/toolkit';

const GET = './Mission/missions/GET';
const GET_STORED = './Mission/missions/GET_STORED';
const UPDATE = './Mission/missions/UPDATE';

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`: {
      const Data = action.payload.map((item) => ({
        name: item.mission_name,
        description: item.description,
        id: item.mission_id,
        reserved: false,
      }));
      localStorage.setItem('mission_Data', JSON.stringify(Data));
      return Data;
    }
    case GET_STORED:
      return action.payload;
    case UPDATE: {
      const modifiedState = state.map((item) => {
        if (item.id === action.id) {
          return ({
            ...item,
            reserved: !item.reserved,
          });
        }
        return item;
      });
      localStorage.setItem('mission_Data', JSON.stringify(modifiedState));
      return modifiedState;
    }
    default:
      return state;
  }
};

const getMissions = createAsyncThunk(
  GET,
  async () => {
    const data = await fetch('https://api.spacexdata.com/v3/missions');
    const payload = await data.json();
    return payload;
  },
);

const getStoredMissions = () => ({
  type: GET_STORED,
  payload: JSON.parse(localStorage.getItem('mission_Data')),
});

const updateStatus = (id) => ({
  type: UPDATE,
  id,
});

export default missionsReducer;
export { getMissions, getStoredMissions, updateStatus };
