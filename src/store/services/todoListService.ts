import { API } from '../../utils';
import {ITodoListItem, ITodoListItemCreateDto} from '../reducers/todoListSlice';

export const todoListService = {
  async fetchAllItems(): Promise<Array<ITodoListItem>> {
    const response = await API( {
      url: '/list',
      method: 'GET',
    });
    return response.data;
  },
  async fetchTodoItemById(id: string): Promise<ITodoListItem> {
    const response = await API( {
      url: `/list/${id}`,
      method: 'GET',
    });
    return response.data;
  },
  async createItem(data: ITodoListItemCreateDto): Promise<ITodoListItem> {
    const result = await API({
      url: '/list',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result.data;
  },
  async deleteItem(id: string): Promise<string> {
    await API( {
      url: `/list/${id}`,
      method: 'DELETE',
    });
    return id;
  },
  async deleteAllItems(): Promise<void> {
    await API({
      url: '/list',
      method: 'DELETE',
    });
  },
  async toggleStateItem(data: ITodoListItem): Promise<ITodoListItem> {
    const result = await API( {
      url: `/list/${data.id}`,
      method: 'PUT',
      data,
    });
    return result.data;
  },
};
