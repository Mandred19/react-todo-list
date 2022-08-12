import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../utils';
import { ITodoListItem } from '../types/todoList.types';

export const fetchTodoList = createAsyncThunk(
  'todoList/fetchTodoList',
  async (_, thunkApi): Promise<ITodoListItem[]> => {
    try {
      const res =  await API({
        url: `/list`,
        method: 'GET',
      });

      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);

export const fetchTodoItemById = createAsyncThunk(
  'todoList/fetchTodoItemById',
  async (id: string, thunkApi): Promise<ITodoListItem> => {
    try {
      const res = await API({
        url: `/list/${id}`,
        method: 'GET',
      });

      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);
