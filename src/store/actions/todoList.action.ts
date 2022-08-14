import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../utils';
import { ITodoListItem, ITodoListItemCreateDto, ITodoListItemUpdateDto } from '../types/todoList.types';

export const fetchTodoList = createAsyncThunk(
  'todoList/fetchTodoList',
  async (_, thunkApi): Promise<ITodoListItem[]> => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const res =  await API({
        url: `/list`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
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
      const accessToken = localStorage.getItem('accessToken');

      const res = await API({
        url: `/list/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);

export const createTodoListItem = createAsyncThunk(
  'todoList/createTodoListItem',
  async (data: ITodoListItemCreateDto, thunkApi): Promise<ITodoListItem> => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const res = await API({
        url: `/list`,
        method: 'POST',
        data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);

export const deleteTodoListItem = createAsyncThunk(
  'todoList/deleteTodoListItem',
  async (id: string, thunkApi): Promise<string> => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const res = await API({
        url: `/list/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);

export const deleteAllTodoListItems = createAsyncThunk(
  'todoList/deleteAllTodoListItems',
  async (_, thunkApi): Promise<void> => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      await API({
        url: `/list`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);

export const toggleStateItem = createAsyncThunk(
  'todoList/toggleStateItem',
  async (data: ITodoListItemUpdateDto, thunkApi): Promise<ITodoListItem> => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const { id, ...changedData } = data;

      const res = await API({
        url: `/list/${id}`,
        method: 'PATCH',
        data: changedData,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);
