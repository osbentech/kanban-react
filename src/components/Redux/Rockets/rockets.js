import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = './Rockets/rockets/GET';
const UPDATE = './Rockets/rockets/UPDATE';
const GET_STORED = './Rockets/rockets/GET_STORED';

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`:
      const DATA = action.payload.map((item) => ({
        id: item.id,
        name: item.rocket_name,
        description: item.description,
        image: item.flickr_images[0],
        reserved: false,
      }));
      localStorage.setItem('ROCKET_DATA', JSON.stringify(DATA));
      return DATA;
    case GET_STORED:
      return action.payload;
    case UPDATE:
      const modifiedState = state.map((item) => {
        if (item.id === action.id) {
          return ({
            ...item,
            reserved: !item.reserved,
          });
        }
        return item;
      })
      localStorage.setItem('ROCKET_DATA', JSON.stringify(modifiedState));
      return modifiedState;
    default:
      return state;
  }
};

const getRockets = createAsyncThunk(
  GET,
  async () => {
    const response = await axios('https://api.spacexdata.com/v3/rockets');
    return response.data; 
  }
);

const getStored = () => ({
  type: GET_STORED,
  payload: JSON.parse(localStorage.getItem('ROCKET_DATA')),
});

const updateStatus = (id) => ({
  type: UPDATE,
  id,
});

export default rocketsReducer;
export { getRockets, updateStatus, getStored };
