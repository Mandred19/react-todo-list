import { combineReducers } from '@reduxjs/toolkit';
import { commonService } from '../services';
import userSlice from './user.slice';

export const rootReducer = combineReducers({
  [commonService.reducerPath]: commonService.reducer,
  userSlice,
});
