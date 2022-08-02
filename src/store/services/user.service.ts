/*
import { SignInRequestDto, SignInResponseDto, UserEntity, UserEntityCreateDto } from '../types/user.types';
import { commonService } from './index';

export const userService = commonService.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.query<SignInResponseDto, SignInRequestDto>({
      query: (data: SignInRequestDto) => ({
        method: 'POST',
        url: `auth/sign-in`,
        body: data,
      }),
    }),
    signUp: builder.query<UserEntity, UserEntityCreateDto>({
      query: (data: UserEntityCreateDto) => ({
        method: 'POST',
        url: `user`,
        body: data,
      }),
    }),
  }),
});

// const signInAction = createAction('user/sign-in');
//
// startAppListening({
//   actionCreator: signInAction,
//   effect: (action) => {
//     // eslint-disable-next-line no-console
//     console.log(111, action);
//   },
// });

export const {
  useSignInQuery,
  useLazySignInQuery,
  useLazySignUpQuery,
} = userService;
*/

import { UserEntity, UserEntityCreateDto } from '../types/user.types';
import { API } from '../../utils';
import { BASE_URL } from '../../utils/constants';

export const userService = {
  async signUp(data: UserEntityCreateDto): Promise<UserEntity> {
    const result = await API({
      url: `${BASE_URL}/users`,
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result.data;
  },
  async signIn(id: string): Promise<UserEntity> {
    const response = await API( {
      url: `/users/${id}`,
      method: 'GET',
    });
    return response.data;
  },
};
