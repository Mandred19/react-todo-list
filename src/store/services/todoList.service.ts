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
        method: 'PATCH',
        url: `/list/${data}`,
      }),
    }),
  }),
});

export const {
  useCreateItemMutation,
  useDeleteItemMutation,
  useDeleteAllItemsMutation,
  useToggleStateItemMutation,
} = todoListService;
