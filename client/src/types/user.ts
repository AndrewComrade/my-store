export interface UserState {
    isAuth: boolean;
    user: IUser | null;
}

export interface IUser {
    id: string | number;
    email: string;
    role: string;
}

export enum UserActionTypes {
    SET_AUTH = 'myStore/user/setAuth',
    SET_USER = 'myStore/user/setUser',
}

type setUser = {
    type: UserActionTypes.SET_USER;
    payload: IUser | null;
};

type setAuth = {
    type: UserActionTypes.SET_AUTH;
    payload: boolean;
};

export type UserActions = setUser | setAuth;
