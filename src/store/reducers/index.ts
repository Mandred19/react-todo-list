import { combineReducers } from '@reduxjs/toolkit';
import todoListSlice from './todoListSlice';

export const rootReducer = combineReducers({
  todoListSlice,
});
