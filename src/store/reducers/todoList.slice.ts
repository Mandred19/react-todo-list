import { ITodoListItem } from '../types/todoList.types';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { fetchTodoItemById, fetchTodoList } from '../actions/todoList.action';

export interface ITodoListSlice {
  todoList: ITodoListItem[],
  currentItem: ITodoListItem | null,
  isFetching: boolean,
  error: string,
}

const initialState: ITodoListSlice = {
  todoList: [],
  currentItem: null,
  isFetching: false,
  error: '',
};

export const todoListSlice: Slice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodoList.pending.type]: (state) => {
      state.isFetching = true;
    },
    [fetchTodoList.fulfilled.type]: (state, action: PayloadAction<ITodoListItem[]>) => {
      state.todoList = action.payload;
      state.isFetching = false;
    },
    [fetchTodoList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isFetching = false;
    },

    [fetchTodoItemById.pending.type]: (state) => {
      state.isFetching = true;
    },
    [fetchTodoItemById.fulfilled.type]: (state, action: PayloadAction<ITodoListItem>) => {
      state.currentItem = action.payload;
      state.isFetching = false;
    },
    [fetchTodoItemById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isFetching = false;
    },
  },
});

export default todoListSlice.reducer;
