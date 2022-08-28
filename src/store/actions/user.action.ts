import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignInRequestDto, SignInResponseDto, UserEntity, UserEntityCreateDto, UserEntityUpdateDto } from '../types/user.types';
import { API } from '../../utils';

export const signIn = createAsyncThunk(
  'user/signIn',
  async (data: SignInRequestDto, thunkApi): Promise<UserEntity> => {
    try {
      const response = await API( {
        url: `/auth/sign-in`,
        method: 'POST',
        data,
      });
      
      if (response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
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

export const updateUserInfo = createAsyncThunk(
  'user/updateUserInfo',
  async (id: string, thunkApi): Promise<UserEntity> => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const result = await API({
        url: `/users/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return result.data;
    } catch (e) {
      thunkApi.rejectWithValue('Не удалось загрузить пользователя');
      return Promise.reject();
    }
  },
);

export const changeUserInfo = createAsyncThunk(
  'user/changeUserInfo',
  async (data: UserEntityUpdateDto, thunkApi): Promise<UserEntity> => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const { id, ...changedData } = data;

      const result = await API({
        url: `/users/${id}`,
        method: 'PATCH',
        data: changedData,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return result.data;
    } catch (e) {
      thunkApi.rejectWithValue('Не удалось создать пользователя');
      return Promise.reject();
    }
  },
);

export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (id: string, thunkApi): Promise<UserEntity> => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const result = await API({
        url: `/users/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return result.data;
    } catch (e) {
      thunkApi.rejectWithValue('Не удалось удалить пользователя');
      return Promise.reject();
    }
  },
);
