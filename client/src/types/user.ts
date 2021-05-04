export interface UserState {
    isAuth: boolean;
    user: boolean | IUser;
}

export interface IUser {
    id: string | number;
    email: string;
    role: string;
}

export enum UserActionTypes {
    SET_AUTH = 'user/setAuth',
    SET_USER = 'user/setUser',
}

type setUser = {
    type: UserActionTypes.SET_USER;
    payload: IUser;
};

type setAuth = {
    type: UserActionTypes.SET_AUTH;
};

export type UserActions = setUser | setAuth;
