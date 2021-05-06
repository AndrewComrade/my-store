import { Dispatch } from 'react';
import axios from 'axios';
import { BrandsActions, BrandsActionTypes, IOption } from '~/types/brands';

const url = process.env.REACT_APP_API_URL;

export const fetchBrands = () => {
    return async (dispatch: Dispatch<BrandsActions>) => {
        dispatch({ type: BrandsActionTypes.FETCH_BRANDS });
        try {
            const response = await axios.get(url + 'api/brand');
            dispatch(fetchBrandsSuccess(response.data));
            console.log(response.data);
        } catch (err) {
            dispatch(fetchBrandsError(err.message));
            console.log(err.message);
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
