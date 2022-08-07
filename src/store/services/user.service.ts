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

export default {};
