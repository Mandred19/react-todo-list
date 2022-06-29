import { combineReducers } from '@reduxjs/toolkit';
import todoListSlice from './todoListSlice';
import userSlice from './userSlice';

export const rootReducer = combineReducers({
  todoListSlice,
  userSlice,
});
