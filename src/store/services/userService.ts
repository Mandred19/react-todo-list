import { UserEntity, UserEntityCreateDto } from '../reducers/userSlice';
import { API } from '../../utils';

export const userService = {
  async createUser(data: UserEntityCreateDto): Promise<UserEntity> {
    const result = await API({
      url: '/user',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result.data;
  },
  async fetchUser(id: string): Promise<UserEntity> {
    const response = await API( {
      url: `/users/${id}`,
      method: 'GET',
    });
    return response.data;
  },
  // async updateUser(id: string): Promise<UserEntity> {
  //
  // },
  async deleteUser(id: string): Promise<string> {
    await API( {
      url: `/users/${id}`,
      method: 'DELETE',
    });
    return id;
  },
};
