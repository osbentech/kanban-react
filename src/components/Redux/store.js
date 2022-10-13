import { configureStore,  combineReducers } from '@reduxjs/toolkit';
// import rocketsReducer from './Rocket/rockets';
import missionsReducer from './Mission/missions';

const rootReducer = combineReducers({
//   rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;