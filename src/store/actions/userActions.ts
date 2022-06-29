import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../services/userService';
import { UserEntity, UserEntityCreateDto } from '../reducers/userSlice';

export const createUser = createAsyncThunk(
  'user/createUser',
  async (data: UserEntityCreateDto, thunkApi): Promise<UserEntity> => {
    try {
      return userService.createUser(data);
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (id: string, thunkApi): Promise<UserEntity> => {
    try {
      return userService.fetchUser(id);
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);

// export const updateUser = createAsyncThunk(
//   'user/updateUser',
//   async (id: string, thunkApi): Promise<UserEntity> => {
//     try {
//       return userService.updateUser(id);
//     } catch (error) {
//       thunkApi.rejectWithValue(error);
//       return Promise.reject(error);
//     }
//   }
// );

export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (id: string, thunkApi): Promise<string> => {
    try {
      return userService.deleteUser(id);
    } catch (error) {
      thunkApi.rejectWithValue(error);
      return Promise.reject(error);
    }
  }
);
