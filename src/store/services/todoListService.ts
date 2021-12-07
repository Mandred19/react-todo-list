import axios from 'axios';
import { ITodoListItem } from '../../types/TodoListItem';

export const todoListService = {
  async fetchAllItems(): Promise<Array<ITodoListItem>> {
    const response = await axios( {
      url: '/todos',
      method: 'GET',
    });
    return response.data;
  },
  async deleteItem(id: string): Promise<string> {
    await axios( {
      url: `/todos/${id}`,
      method: 'DELETE',
    });
    return id;
  },
  async toggleStateItem(data: ITodoListItem): Promise<ITodoListItem> {
    await axios( {
      url: `/todos/${data.id}`,
      method: 'PUT',
      data: data,
    });
    return data;
  },
};
