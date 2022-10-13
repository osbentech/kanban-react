import { createAsyncThunk } from "@reduxjs/toolkit";
const GET = './Mission/missions/GET';

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return action.payload.map((item) => ({
        name: item.mission_name,
        description: item.description,
        id: item.mission_id,
        reserved: false,
      }))
    default:
      return state;
  }
}

const getMissions = createAsyncThunk(
  GET,
  async () => {
    const data = await fetch('https://api.spacexdata.com/v3/missions');
    const payload = await data.json();
    return payload;   
  }
)

export default missionsReducer;
export { getMissions };
