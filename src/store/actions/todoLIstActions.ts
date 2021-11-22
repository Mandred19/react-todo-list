import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodoListItem } from '../../types/TodoListItem';

export const fetchTodoList = createAsyncThunk(
  'todoList/fetchTodoList',
  async (_, thunkApi): Promise<Array<ITodoListItem>> => {
    try {
      return Promise.resolve([
        {id: 'title_1', title: 'Title 1', isFavorite: false, isComplete: false},
        {id: 'title_2', title: 'Title 2', isFavorite: true, isComplete: false},
        {id: 'title_3', title: 'Title 3', isFavorite: true, isComplete: false},
        {id: 'title_4', title: 'Title 4', isFavorite: false, isComplete: true},
        {id: 'title_5', title: 'Title 5', isFavorite: false, isComplete: false},
        {id: 'title_6', title: 'Title 6', isFavorite: true, isComplete: false},
        {id: 'title_7', title: 'Title 7', isFavorite: false, isComplete: true},
        {id: 'title_8', title: 'Title 8', isFavorite: false, isComplete: false},
        {id: 'title_9', title: 'Title 9', isFavorite: false, isComplete: true},
      ]);
    } catch (e) {
      thunkApi.rejectWithValue('List is not loaded');
      console.warn(e);
      return Promise.reject(e);
    }
  }
);
