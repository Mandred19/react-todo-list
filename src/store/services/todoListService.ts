import axios from 'axios';
import { ITodoListItem } from '../reducers/todoListSlice';

export const todoListService = {
  async fetchAllItems(): Promise<Array<ITodoListItem>> {
    const response = await axios( {
      url: '/todos',
      method: 'GET',
    });
    return response.data;
  },
  async createItem(data: ITodoListItem): Promise<ITodoListItem> {
    await axios({
      url: '/todos',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data;
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
      data,
    });
    return data;
  },
};
