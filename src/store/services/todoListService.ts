import axios from 'axios';
import {ITodoListItem, ITodoListItemCreateDto} from '../reducers/todoListSlice';
import { transformTodoList, transformTodoListItem } from '../utils/transformTodoList';

export const todoListService = {
  async fetchAllItems(): Promise<Array<ITodoListItem>> {
    const response = await axios( {
      url: 'http://localhost:4200/list',
      method: 'GET',
    });
    return transformTodoList(response.data);
  },
  async createItem(data: ITodoListItemCreateDto): Promise<ITodoListItem> {
    const result = await axios({
      url: 'http://localhost:4200/list',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return transformTodoListItem(result.data);
  },
  async deleteItem(id: string): Promise<string> {
    await axios( {
      url: `http://localhost:4200/list/${id}`,
      method: 'DELETE',
    });
    return id;
  },
  async toggleStateItem(data: ITodoListItem): Promise<ITodoListItem> {
    const result = await axios( {
      url: `http://localhost:4200/list/${data.id}`,
      method: 'PUT',
      data,
    });
    return transformTodoListItem(result.data);
  },
};
