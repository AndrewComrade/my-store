import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Dispatch } from 'react';
import { IUser, UserActions, UserActionTypes } from '~/types/user';

const url = process.env.REACT_APP_API_URL;

export const registration = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserActions>) => {
        try {
            const response = await axios.post(`${url}api/user/registration`, {
                email,
                password,
                role: 'ADMIN',
            });

            const user: IUser = jwtDecode(response.data.token);

            dispatch(setUser(user));
            dispatch({ type: UserActionTypes.SET_AUTH });

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
            const response = await axios.post(`${url}api/user/login`, {
                email,
                password,
            });

            const user: IUser = jwtDecode(response.data.token);

            dispatch(setUser(user));
            dispatch({ type: UserActionTypes.SET_AUTH });

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
            const response = await axios.get(`${url}api/user/auth`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            const user: IUser = jwtDecode(response.data.token);

            dispatch(setUser(user));
            dispatch({ type: UserActionTypes.SET_AUTH });
        } catch (err) {
            console.log(err.message);
        }
    };
};

export const setUser = (payload: IUser): UserActions => {
    return { type: UserActionTypes.SET_USER, payload };
};
