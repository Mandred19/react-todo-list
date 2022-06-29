import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Slice } from '@reduxjs/toolkit/src/createSlice';
import { createUser, deleteUser, fetchUser } from '../actions/userActions';

export interface UserSlice {
  currentUser: UserEntity | null,
  pending: boolean,
  error: string,
}

const initialState: UserSlice = {
  currentUser: null,
  pending: false,
  error: '',
};

export const userSlice: Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [createUser.pending.type]: (state) => {
      state.pending = true;
    },
    [createUser.fulfilled.type]: (state, action: PayloadAction<UserEntity>) => {
      state.currentUser = action.payload;
      state.pending = false;
    },
    [createUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.pending = false;
    },

    [fetchUser.pending.type]: (state) => {
      state.pending = true;
    },
    [fetchUser.fulfilled.type]: (state, action: PayloadAction<UserEntity>) => {
      state.currentUser = action.payload;
      state.pending = false;
    },
    [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.pending = false;
    },

    [deleteUser.pending.type]: (state) => {
      state.pending = true;
    },
    [deleteUser.fulfilled.type]: (state) => {
      state.currentUser = null;
      state.pending = false;
    },
    [deleteUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.pending = false;
    },
  },
});

export default userSlice.reducer;

export interface UserEntity {
  id: string,
  name: string,
  email: string,
  avatar: string,
  createdAt: Date,
  updatedAt: Date,
}

export interface UserEntityCreateDto {
  name: string,
  email: string,
  password: string,
  avatar: string,
}
