import {
    DevicesActions,
    DevicesActionTypes,
    IDevice,
    IDevicesData,
    IOption,
} from '~/types/devices';
import { Dispatch } from 'react';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const fetchTypes = () => {
    return async (dispatch: Dispatch<DevicesActions>) => {
        dispatch(fetchData());
        try {
            const response = await axios.get<IOption[]>(url + 'api/type');
            dispatch(fetchTypesSuccess(response.data));
            console.log(response.data);
        } catch (err) {
            dispatch(fetchDataError(err.message));
            console.log(err.message);
        }
    };
};

export const fetchBrands = () => {
    return async (dispatch: Dispatch<DevicesActions>) => {
        dispatch(fetchData());
        try {
            const response = await axios.get<IOption[]>(url + 'api/brand');
            dispatch(fetchBrandsSuccess(response.data));
            console.log(response.data);
        } catch (err) {
            dispatch(fetchDataError(err.message));
            console.log(err.message);
        }
    };
};

export const fetchDevices = (
    typeId?: number,
    brandId?: number,
    page?: number,
    limit?: number
) => {
    return async (dispatch: Dispatch<DevicesActions>) => {
        dispatch(fetchData());
        try {
            const response = await axios.get<IDevicesData>(url + 'api/device', {
                params: {
                    typeId,
                    brandId,
                    page,
                    limit,
                },
            });
            dispatch(fetchDevicesSuccess(response.data.rows));
            console.log(response.data.rows);
        } catch (err) {
            dispatch(fetchDataError(err.message));
            console.log(err.message);
        }
    };
};

export const fetchDevice = (id: string) => {
    return async (dispatch: Dispatch<DevicesActions>) => {
        dispatch(fetchData());
        try {
            const response = await axios.get<IDevice>(`${url}api/device/${id}`);
            dispatch(fetchDeviceSuccess(response.data));
            console.log(response.data);
        } catch (err) {
            dispatch(fetchDataError(err.message));
            console.log(err.message);
        }
    };
};

export const fetchData = (): DevicesActions => {
    return { type: DevicesActionTypes.FETCH_DATA };
};

export const fetchDataError = (payload: string): DevicesActions => {
    return { type: DevicesActionTypes.FETCH_DATA_ERROR, payload };
};

export const fetchTypesSuccess = (payload: IOption[]): DevicesActions => {
    return { type: DevicesActionTypes.FETCH_TYPES_SUCCESS, payload };
};

export const fetchBrandsSuccess = (payload: IOption[]): DevicesActions => {
    return { type: DevicesActionTypes.FETCH_BRANDS_SUCCESS, payload };
};

export const fetchDevicesSuccess = (payload: IDevice[]): DevicesActions => {
    return { type: DevicesActionTypes.FETCH_DEVICES_SUCCESS, payload };
};

export const fetchDeviceSuccess = (payload: IDevice): DevicesActions => {
    return { type: DevicesActionTypes.FETCH_DEVICE_SUCCESS, payload };
};

export const setSelectedBrand = (payload: IOption | null): DevicesActions => {
    return { type: DevicesActionTypes.SET_SELECTED_BRAND, payload };
};

export const setSelectedType = (payload: IOption | null): DevicesActions => {
    return { type: DevicesActionTypes.SET_SELECTED_TYPE, payload };
};
