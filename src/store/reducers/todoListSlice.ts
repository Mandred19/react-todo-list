import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Slice } from '@reduxjs/toolkit/src/createSlice';
import {
  createTodoListItem,
  deleteTodoListItem,
  fetchTodoList,
  toggleCompleteTodoListItem,
  toggleFavoriteTodoListItem,
} from '../actions/todoLIstActions';

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
    /** GET ALL ITEMS */
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

    /** CREATE ITEM */
    [createTodoListItem.pending.type]: (state) => {
      state.pending = true;
    },
    [createTodoListItem.fulfilled.type]: (state, action: PayloadAction<ITodoListItem>) => {
      state.todoList.push(action.payload);
      state.pending = false;
    },
    [createTodoListItem.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.pending = false;
    },

    /** UPDATE ITEM */

    /** DELETE ITEM */
    [deleteTodoListItem.pending.type]: (state) => {
      state.pending = true;
    },
    [deleteTodoListItem.fulfilled.type]: (state, action: PayloadAction<string>) => {
      const itemIdx = state.todoList.findIndex((item) => item.id === action.payload);
      state.todoList.splice(itemIdx, 1);
      state.pending = false;
    },
    [deleteTodoListItem.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.pending = false;
    },

    /** TOGGLE FAVORITE ITEM */
    [toggleFavoriteTodoListItem.pending.type]: (state) => {
      state.pending = true;
    },
    [toggleFavoriteTodoListItem.fulfilled.type]: (state, action: PayloadAction<ITodoListItem>) => {
      const itemIdx = state.todoList.findIndex((item) => item.id === action.payload.id);
      state.todoList[itemIdx].isFavorite = action.payload.isFavorite;
      state.pending = false;
    },
    [toggleFavoriteTodoListItem.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.pending = false;
    },

    /** TOGGLE COMPLETE ITEM */
    [toggleCompleteTodoListItem.pending.type]: (state) => {
      state.pending = true;
    },
    [toggleCompleteTodoListItem.fulfilled.type]: (state, action: PayloadAction<ITodoListItem>) => {
      const itemIdx = state.todoList.findIndex((item) => item.id === action.payload.id);
      state.todoList[itemIdx].isComplete = action.payload.isComplete;
      state.pending = false;
    },
    [toggleCompleteTodoListItem.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.pending = false;
    },
  },
});

export default todoListSlice.reducer;

export interface ITodoListItem {
  id: string,
  title: string,
  description: string,
  creationDate: Date,
  isComplete: boolean,
  isFavorite: boolean,
}
