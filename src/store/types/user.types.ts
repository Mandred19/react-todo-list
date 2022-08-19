export interface UserEntity {
  id: string,
  name: string,
  email: string,
  avatar: string,
  createdAt: Date,
  updatedAt: Date,
}

export interface UserEntityCreateDto {
  name: string,
  email: string,
  password: string,
}

export interface UserEntityUpdateDto {
  id: string,
  name?: string,
  email?: string,
  avatar?: string,
}

export interface SignInRequestDto {
  email: string;
  password: string;
}

export interface SignInResponseDto {
  accessToken: string;
  payload: UserEntity;
}
