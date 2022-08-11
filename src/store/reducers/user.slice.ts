import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { SignInResponseDto, UserEntity } from '../types/user.types';
import { autoLogin, logout, signIn, signUp } from '../actions/user.action';

interface InitialState {
  user: UserEntity | null,
  accessToken: string,
  isAuth: boolean,
  // refreshToken: string,
  // expiresIn: string,
  isFetching: boolean,
  error: string,
}

const initialState: InitialState = {
  user: null,
  accessToken: '',
  isAuth: false,
  // refreshToken: '',
  // expiresIn: '',
  isFetching: false,
  error: '',
};

export const userSlice: Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.isFetching = true;
    },
    [signIn.fulfilled.type]: (state, action: PayloadAction<SignInResponseDto>) => {
      state.user = action.payload.payload;
      state.accessToken = action.payload.accessToken;
      state.isAuth = true;
      state.isFetching = false;
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isAuth = false;
      state.isFetching = false;
    },

    [autoLogin.pending.type]: (state) => {
      state.isFetching = true;
    },
    [autoLogin.fulfilled.type]: (state, action: PayloadAction<SignInResponseDto>) => {
      state.user = action.payload.payload;
      state.accessToken = action.payload.accessToken;
      state.isAuth = true;
      state.isFetching = false;
    },
    [autoLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isAuth = false;
      state.isFetching = false;
    },

    [signUp.pending.type]: (state) => {
      state.isFetching = true;
    },
    [signUp.fulfilled.type]: (state, action: PayloadAction<UserEntity>) => {
      state.user = action.payload;
      // state.accessToken = action.payload.accessToken; // TODO Сделать обработку accessToken при создании пользователя
      state.isAuth = true;
      state.isFetching = false;
    },
    [signUp.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isAuth = false;
      state.isFetching = false;
    },

    [logout.fulfilled.type]: (state) => {
      state.user = null;
      state.accessToken = '';
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;
