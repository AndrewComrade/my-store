import { Dispatch } from 'react';
import { BrandsActions, BrandsActionTypes, IOption } from '~/types/brands';
import { authHost, host } from '~/http';

const url = process.env.REACT_APP_API_URL;

export const fetchBrands = () => {
    return async (dispatch: Dispatch<BrandsActions>) => {
        dispatch({ type: BrandsActionTypes.FETCH_BRANDS });
        try {
            const response = await host.get(url + 'api/brand');
            dispatch(fetchBrandsSuccess(response.data));
        } catch (err) {
            dispatch(fetchBrandsError(err.message));
        }
    };
};

export const createBrand = (brand: string) => {
    return async () => {
        try {
            const response = await authHost.post(`${url}api/brand`, {
                name: brand,
            });
            alert('New brand created');
        } catch (err) {
            alert(err.message);
        }
    };
};

export const fetchBrandsError = (payload: string): BrandsActions => {
    return { type: BrandsActionTypes.FETCH_BRANDS_ERROR, payload };
};

export const fetchBrandsSuccess = (payload: IOption[]): BrandsActions => {
    return { type: BrandsActionTypes.FETCH_BRANDS_SUCCESS, payload };
};

export const setSelectedBrand = (payload: IOption | null): BrandsActions => {
    return { type: BrandsActionTypes.SET_SELECTED_BRAND, payload };
};
