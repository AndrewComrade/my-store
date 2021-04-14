import {createAction} from '@reduxjs/toolkit';
import {User, UserActionTypes} from '../../types/user';

export const setAuth = createAction<boolean>(UserActionTypes.SET_AUTH);
export const setUser = createAction<boolean | User>(UserActionTypes.SET_USER);
