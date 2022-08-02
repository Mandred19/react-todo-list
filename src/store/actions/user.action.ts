import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignInRequestDto, UserEntity, UserEntityCreateDto } from '../types/user.types';
import { API } from '../../utils';

export const signUp = createAsyncThunk(
  'user/signUp',
  async (data: UserEntityCreateDto, thunkApi): Promise<UserEntity> => {
    try {
      const result = await API({
        url: `/users`,
        method: 'POST',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return result.data;
    } catch (e) {
      thunkApi.rejectWithValue('Не удалось создать пользователя');
      return Promise.reject();
    }
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async (data: SignInRequestDto, thunkApi): Promise<UserEntity> => {
    try {
      const response = await API( {
        url: `/auth/sign-in`,
        method: 'POST',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (e) {
      thunkApi.rejectWithValue('Не удалось авторизоваться');
      return Promise.reject();
    }
  }
);
