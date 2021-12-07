import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodoListItem } from '../../types/TodoListItem';

export const fetchTodoList = createAsyncThunk(
  'todoList/fetchTodoList',
  async (_, thunkApi): Promise<Array<ITodoListItem>> => {
    try {
      const response = await axios( {
        url: '/todos',
        method: 'GET',
      });
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue('List is not loaded');
      console.warn('fetchTodoList', error);
      return Promise.reject(error);
    }
  }
);
