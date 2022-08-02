import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { SignInResponseDto, UserEntity } from '../types/user.types';
import { signIn, signUp } from '../actions/user.action';

const initialState: InitialState = {
  user: null,
  accessToken: '',
  // refreshToken: '',
  // expiresIn: '',
  pending: false,
  error: '',
};

export const userSlice: Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending.type]: (state) => {
      state.pending = true;
    },
    [signUp.fulfilled.type]: (state, action: PayloadAction<UserEntity>) => {
      state.user = action.payload;
      // state.accessToken = action.payload.accessToken; // TODO Сделать обработку accessToken при создании пользователя
      state.pending = false;
    },
    [signUp.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.pending = false;
    },

    [signIn.pending.type]: (state) => {
      state.pending = true;
    },
    [signIn.fulfilled.type]: (state, action: PayloadAction<SignInResponseDto>) => {
      state.user = action.payload.payload;
      state.accessToken = action.payload.accessToken;
      state.pending = false;
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.pending = false;
    },
  },
});

export default userSlice.reducer;

interface InitialState {
  user: UserEntity | null,
  accessToken: string,
  // refreshToken: string,
  // expiresIn: string,
  pending: boolean,
  error: string,
}
