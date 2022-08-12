/*
import { ITodoListItem, ITodoListItemCreateDto } from '../types/todoList.types';
import { commonService } from './index';

export const todoListService = commonService.injectEndpoints({
  endpoints: (builder) => ({
    createItem: builder.mutation<ITodoListItem, ITodoListItemCreateDto>({
      query: (data: ITodoListItemCreateDto) => ({
        method: 'POST',
        url: `/list`,
        body: data,
      }),
    }),
    fetchAllItems: builder.query<ITodoListItem[], void>({
      query: () => ({
        method: 'GET',
        url: `/list`,
      }),
    }),
    fetchTodoItemById: builder.query<ITodoListItem, string>({
      query: (id: string) => ({
        method: 'GET',
        url: `/list/${id}`,
      }),
    }),
    deleteItem: builder.mutation<string, string>({
      query: (id: string) => ({
        method: 'DELETE',
        url: `/list/${id}`,
      }),
    }),
    deleteAllItems: builder.mutation<void, void>({
      query: () => ({
        method: 'DELETE',
        url: `/list`,
      }),
    }),
    toggleStateItem: builder.mutation<ITodoListItem, ITodoListItem>({
      query: (data: ITodoListItem) => ({
        method: 'PUT',
        url: `/list/${data}`,
      }),
    }),
  }),
});

export const {
  useCreateItemMutation,
  useFetchAllItemsQuery,
  useFetchTodoItemByIdQuery,
  useDeleteItemMutation,
  useDeleteAllItemsMutation,
  useToggleStateItemMutation,
} = todoListService;
*/

export default {};
