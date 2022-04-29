import { createAsyncThunk } from '@reduxjs/toolkit';
import { todoListService } from '../services/todoListService';
import {ITodoListItem, ITodoListItemCreateDto} from '../reducers/todoListSlice';

export const fetchTodoList = createAsyncThunk(
  'todoList/fetchTodoList',
  async (_, thunkApi): Promise<Array<ITodoListItem>> => {
    try {
      return todoListService.fetchAllItems();
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
      return todoListService.createItem(data);
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
      return todoListService.deleteItem(id);
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);

export const toggleFavoriteTodoListItem = createAsyncThunk(
  'todoList/toggleFavoriteTodoListItem',
  async (data: ITodoListItem, thunkApi): Promise<ITodoListItem> => {
    try {
      return todoListService.toggleStateItem(data);
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);

export const toggleCompleteTodoListItem = createAsyncThunk(
  'todoList/toggleCompleteTodoListItem',
  async (data: ITodoListItem, thunkApi): Promise<ITodoListItem> => {
    try {
      return todoListService.toggleStateItem(data);
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);
