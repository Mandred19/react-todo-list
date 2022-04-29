import { ITodoListItem } from '../reducers/todoListSlice';

export function transformTodoList(list: ITransformTodoListItem[]): ITodoListItem[] {
  return list.map((item) => transformTodoListItem(item));
}

export function transformTodoListItem(item: ITransformTodoListItem): ITodoListItem {
  return {
    id: item._id,
    title: item.title,
    description: item.description,
    isComplete: item.isComplete,
    isFavorite: item.isFavorite,
    createdDate: item.createdDate,
    updatedDate: item.updatedDate,
  };
}

interface ITransformTodoListItem extends ITodoListItem {
  _id: string,
  __v: number,
}
