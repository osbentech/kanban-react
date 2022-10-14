import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsReducer from './Mission/missions';
import rocketsReducer from './Rockets/rockets';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
