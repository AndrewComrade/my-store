import { Dispatch } from 'react';
import axios from 'axios';
import { TypesActions, TypesActionTypes } from '~/types/types';
import { IOption } from '~/types/brands';

const url = process.env.REACT_APP_API_URL;

export const fetchTypes = () => {
    return async (dispatch: Dispatch<TypesActions>) => {
        dispatch({ type: TypesActionTypes.FETCH_TYPES });
        try {
            const response = await axios.get(url + 'api/type');
            dispatch(fetchTypesSuccess(response.data));
            console.log(response.data);
        } catch (err) {
            dispatch(fetchDataError(err.message));
            console.log(err.message);
        }
    };
};

export const createType = (type: string) => {
    return async () => {
        try {
            const response = await axios.post(`${url}api/type`, type, {
                headers: {
                    Authorization: `Bearer`,
                },
            });
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };
};

export const fetchDataError = (payload: string): TypesActions => {
    return { type: TypesActionTypes.FETCH_TYPES_ERROR, payload };
};

export const fetchTypesSuccess = (payload: IOption[]): TypesActions => {
    return { type: TypesActionTypes.FETCH_TYPES_SUCCESS, payload };
};

export const setSelectedType = (payload: IOption | null): TypesActions => {
    return { type: TypesActionTypes.SET_SELECTED_TYPE, payload };
};
