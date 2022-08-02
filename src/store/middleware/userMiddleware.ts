import { startAppListening } from './listenerMiddleware';
import { createAction } from '@reduxjs/toolkit';

const signInAction = createAction('user/sign-in');

startAppListening({
  actionCreator: signInAction,
  effect: (action) => {
    // eslint-disable-next-line no-console
    console.log(111, action);
  },
});
