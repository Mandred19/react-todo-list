import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITodoListItem } from '../../types/TodoListItem';
import { todoListService } from '../services/todoListService';

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
      return todoListService.toggleFavoriteItem(data);
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);
