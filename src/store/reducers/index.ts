import { combineReducers } from '@reduxjs/toolkit';
import todoListSlice from './todoList.slice';
import userSlice from './user.slice';

export const rootReducer = combineReducers({
  todoListSlice,
  userSlice,
});
