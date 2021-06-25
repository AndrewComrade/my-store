export interface DevicesState {
    loading: boolean;
    error: string;
    devices: Array<IDevice>;
    device: IDevice | null;
    page: number;
    totalCount: number;
    limit: number;
}

export interface IInfo {
    id: number;
    title: string;
    description: string;
}

export interface IDevice {
    id: number;
    name: string;
    brandId: number;
    typeId: number;
    price: number;
    rating: number;
    img: string;
    info?: Array<IInfo>;
}

type fetchDevices = {
    type: DevicesActionTypes.FETCH_DEVICES;
};

type fetchDevicesSuccess = {
    type: DevicesActionTypes.FETCH_DEVICES_SUCCESS;
    payload: IDevice[];
};

type fetchDevicesError = {
    type: DevicesActionTypes.FETCH_DEVICES_ERROR;
    payload: string;
};

type fetchDeviceSuccess = {
    type: DevicesActionTypes.FETCH_DEVICE_SUCCESS;
    payload: IDevice;
};

type createDevice = {
    type: DevicesActionTypes.CREATE_DEVICE;
};

export enum DevicesActionTypes {
    FETCH_DEVICES = 'devices/fetchDevices',
    FETCH_DEVICES_SUCCESS = 'devices/fetchDevicesSuccess',
    FETCH_DEVICES_ERROR = 'devices/fetchDataError',
    FETCH_DEVICE_SUCCESS = 'devices/fetchDeviceSuccess',
    CREATE_DEVICE = 'devices/createDevice',
}

export type DevicesActions =
    | fetchDevices
    | fetchDevicesSuccess
    | fetchDevicesError
    | fetchDeviceSuccess
    | createDevice;
