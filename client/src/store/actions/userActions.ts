import jwtDecode from 'jwt-decode';
import { Dispatch } from 'react';
import { IUser, UserActions, UserActionTypes } from '~/types/user';
import { authHost, host } from '~/http';

const url = process.env.REACT_APP_API_URL;

export const registration = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserActions>) => {
        try {
            const response = await host.post(`${url}api/user/registration`, {
                email,
                password,
                role: 'ADMIN',
            });

            const user: IUser = jwtDecode(response.data.token);

            dispatch(setUser(user));
            dispatch(setAuth(true));

            localStorage.setItem('token', response.data.token);

            alert('Registration successful');
        } catch (err) {
            alert(err.message);
        }
    };
};

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserActions>) => {
        try {
            const response = await host.post(`${url}api/user/login`, {
                email,
                password,
            });

            const user: IUser = jwtDecode(response.data.token);

            dispatch(setUser(user));
            dispatch(setAuth(true));

            localStorage.setItem('token', response.data.token);

            alert('Login successful');
        } catch (err) {
            alert(err.message);
        }
    };
};

export const check = () => {
    return async (dispatch: Dispatch<UserActions>) => {
        try {
            const response = await authHost.get(`${url}api/user/auth`);

            const user: IUser = jwtDecode(response.data.token);

            dispatch(setUser(user));
            dispatch(setAuth(true));
        } catch (err) {
            console.log(err.message);
        }
    };
};

export const setUser = (payload: IUser | null): UserActions => {
    return { type: UserActionTypes.SET_USER, payload };
};

export const setAuth = (payload: boolean): UserActions => {
    return { type: UserActionTypes.SET_AUTH, payload };
};
