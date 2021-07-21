import { Dispatch } from 'react';
import { TypesActions, TypesActionTypes } from '~/types/types';
import { IOption } from '~/types/brands';
import { host, authHost } from '~/http';

const url = process.env.REACT_APP_API_URL;

export const fetchTypes = () => {
    return async (dispatch: Dispatch<TypesActions>) => {
        dispatch({ type: TypesActionTypes.FETCH_TYPES });
        try {
            const response = await host.get(url + 'api/type');
            dispatch(fetchTypesSuccess(response.data));
        } catch (err) {
            dispatch(fetchTypesError(err.message));
        }
    };
};

export const createType = (type: string) => {
    return async () => {
        try {
            const response = await authHost.post(`${url}api/type`, {
                name: type,
            });
            alert('New type created');
        } catch (err) {
            alert(err.message);
        }
    };
};

export const fetchTypesError = (payload: string): TypesActions => {
    return { type: TypesActionTypes.FETCH_TYPES_ERROR, payload };
};

export const fetchTypesSuccess = (payload: IOption[]): TypesActions => {
    return { type: TypesActionTypes.FETCH_TYPES_SUCCESS, payload };
};

export const setSelectedType = (payload: IOption | null): TypesActions => {
    return { type: TypesActionTypes.SET_SELECTED_TYPE, payload };
};
