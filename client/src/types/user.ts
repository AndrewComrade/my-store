export interface UserState {
  isAuth: boolean;
  user: boolean | User;
}

export type User = {
  id: string | number;
  email: string;
  role: string;
}

export enum UserActionTypes {
  SET_AUTH = 'user/SET_AUTH',
  SET_USER = 'user/SET_USER',
}
