import { UserEntity } from './user.types';

export interface ITodoListItem {
  id: string,
  title: string,
  description: string,
  isComplete: boolean,
  isFavorite: boolean,
  createdAt: Date,
  updatedAt: Date,
  author: UserEntity,
}

export interface ITodoListItemCreateDto {
  title: string,
  description: string,
  isFavorite: boolean,
}

export interface ITodoListItemUpdateDto {
  id: string,
  title?: string,
  description?: string,
  isFavorite?: boolean,
  isComplete?: boolean,
}
