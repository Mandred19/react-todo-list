import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ITodoListItem } from '../../types/TodoListItem';
import { Slice } from '@reduxjs/toolkit/src/createSlice';
import { fetchTodoList } from '../actions/todoLIstActions';

export interface ITodoListSlice {
  todoList: Array<ITodoListItem>,
  pending: boolean,
  error: string,
}

const initialState: ITodoListSlice = {
  todoList: [],
  pending: false,
  error: '',
};

export const todoListSlice: Slice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodoList.pending.type]: (state) => {
      state.pending = true;
    },
    [fetchTodoList.fulfilled.type]: (state, action: PayloadAction<Array<ITodoListItem>>) => {
      state.todoList = action.payload;
      state.pending = false;
    },
    [fetchTodoList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.pending = false;
    },
  },
});

export default todoListSlice.reducer;
