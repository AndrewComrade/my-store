import { DevicesActions, DevicesActionTypes, IDevice } from '~/types/devices';
import { Dispatch } from 'react';
import { authHost, host } from '~/http';

const url = process.env.REACT_APP_API_URL;

export const fetchDevices = (
    typeId?: number,
    brandId?: number,
    page?: number,
    limit?: number
) => {
    return async (dispatch: Dispatch<DevicesActions>) => {
        dispatch({ type: DevicesActionTypes.FETCH_DEVICES });
        try {
            const response = await host.get(url + 'api/device', {
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
            dispatch(fetchDevicesError(err.message));
            console.log(err.message);
        }
    };
};

export const fetchDevice = (id: string) => {
    return async (dispatch: Dispatch<DevicesActions>) => {
        dispatch({ type: DevicesActionTypes.FETCH_DEVICES });
        try {
            const response = await host.get(`${url}api/device/${id}`);
            dispatch(fetchDeviceSuccess(response.data));
            console.log(response.data);
        } catch (err) {
            dispatch(fetchDevicesError(err.message));
            console.log(err.message);
        }
    };
};

export const fetchDevicesError = (payload: string): DevicesActions => {
    return { type: DevicesActionTypes.FETCH_DEVICES_ERROR, payload };
};

export const fetchDevicesSuccess = (payload: IDevice[]): DevicesActions => {
    return { type: DevicesActionTypes.FETCH_DEVICES_SUCCESS, payload };
};

export const fetchDeviceSuccess = (payload: IDevice): DevicesActions => {
    return { type: DevicesActionTypes.FETCH_DEVICE_SUCCESS, payload };
};
