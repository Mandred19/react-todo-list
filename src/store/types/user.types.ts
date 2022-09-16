export enum AppLang {
  EN_US = 'en-US',
  RU_RU = 'ru-RU',
}

export interface UserEntity {
  id: string,
  name: string,
  email: string,
  avatar: string,
  appLang: AppLang,
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
  appLang?: AppLang,
}

export interface SignInRequestDto {
  email: string;
  password: string;
}

export interface SignInResponseDto {
  accessToken: string;
  user: UserEntity;
}
