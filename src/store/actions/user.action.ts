import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignInRequestDto, SignInResponseDto, UserEntity, UserEntityCreateDto } from '../types/user.types';
import { API } from '../../utils';

export const signIn = createAsyncThunk(
  'user/signIn',
  async (data: SignInRequestDto, thunkApi): Promise<UserEntity> => {
    try {
      const response = await API( {
        url: `/auth/sign-in`,
        method: 'POST',
        data,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      });
      
      const { accessToken } = response.data;

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }

      return response.data;
    } catch (e) {
      thunkApi.rejectWithValue('Не удалось авторизоваться');
      return Promise.reject();
    }
  },
);

export const autoLogin = createAsyncThunk(
  'user/autoLogin',
  async (_, thunkApi): Promise<SignInResponseDto> => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        const response = await API( {
          url: `/auth/auto-login`,
          method: 'POST',
          data: { accessToken },
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
        });

        return {
          accessToken,
          payload: response.data,
        };
      }

      thunkApi.rejectWithValue('Данные для автоматической авторизации отсутствуют');
      return Promise.reject();
    } catch (e) {
      localStorage.removeItem('accessToken');
      thunkApi.rejectWithValue('Не удалось автоматически авторизоваться');
      return Promise.reject();
    }
  },
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (data: UserEntityCreateDto, thunkApi): Promise<UserEntity> => {
    try {
      const result = await API({
        url: `/users`,
        method: 'POST',
        data,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      });

      return result.data;
    } catch (e) {
      thunkApi.rejectWithValue('Не удалось создать пользователя');
      return Promise.reject();
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  (): void => {
    localStorage.removeItem('accessToken');
  },
);
