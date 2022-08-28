import { ITodoListItem } from '../types/todoList.types';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { createTodoListItem, deleteAllTodoListItems, deleteTodoListItem, fetchTodoItemById, fetchTodoList, toggleStateItem } from '../actions/todoList.action';

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

    [createTodoListItem.pending.type]: (state) => {
      state.isFetching = true;
    },
    [createTodoListItem.fulfilled.type]: (state, action: PayloadAction<ITodoListItem>) => {
      state.todoList.push(action.payload);
      state.isFetching = false;
    },
    [createTodoListItem.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isFetching = false;
    },

    [deleteTodoListItem.pending.type]: (state) => {
      state.isFetching = true;
    },
    [deleteTodoListItem.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter((item) => item.id !== action.payload);
      state.isFetching = false;
    },
    [deleteTodoListItem.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isFetching = false;
    },

    [deleteAllTodoListItems.pending.type]: (state) => {
      state.isFetching = true;
    },
    [deleteAllTodoListItems.fulfilled.type]: (state) => {
      state.todoList = [];
      state.isFetching = false;
    },
    [deleteAllTodoListItems.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isFetching = false;
    },

    [toggleStateItem.pending.type]: (state) => {
      state.isFetching = true;
    },
    [toggleStateItem.fulfilled.type]: (state, action: PayloadAction<ITodoListItem>) => {
      const itemIdx = state.todoList.findIndex((item) => item.id === action.payload.id);
      state.todoList[itemIdx] = action.payload;
      state.isFetching = false;
    },
    [toggleStateItem.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isFetching = false;
    },
  },
});

export default todoListSlice.reducer;
