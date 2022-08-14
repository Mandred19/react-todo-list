import { combineReducers } from '@reduxjs/toolkit';
import todoListSlice from './todoList.slice';
import userSlice from './user.slice';
// import { commonService } from '../services';

export const rootReducer = combineReducers({
  // [commonService.reducerPath]: commonService.reducer,
  todoListSlice,
  userSlice,
});
