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
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);

export const deleteTodoListItem = createAsyncThunk(
  'todoList/deleteTodoListItem',
  async (id:string, thunkApi): Promise<string> => {
    try {
      await axios( {
        url: `/todos/${id}`,
        method: 'DELETE',
      });
      return id;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);
