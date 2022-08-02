import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL } from '../../utils/constants';

export const commonService = createApi({
  reducerPath: 'commonService',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json;charset=UTF-8');
      // headers.set('Authorization', 'anonymous'); // TODO Добавить обработку этого заголовка тут или где-то еще
      return headers;
    },
  }),
  tagTypes: ['TodoList', 'TodoListItem'],
  endpoints: () => ({}),
});
