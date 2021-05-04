export interface DevicesState {
    loading: boolean;
    error: string;
    types: Array<IOption>;
    brands: Array<IOption>;
    devices: Array<IDevice>;
    device?: IDevice;
    selectedType: IOption | null;
    selectedBrand: IOption | null;
    page: number;
    totalCount: number;
    limit: number;
}

export interface IInfo {
    id: number;
    title: string;
    description: string;
    number: any;
}

export interface IDevicesData {
    rows: Array<IDevice>;
    count: number;
}

export interface IOption {
    id: number;
    name: string;
    createdAt?: string;
    updatedAt?: string;
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

type fetchData = {
    type: DevicesActionTypes.FETCH_DATA;
};

type fetchDataError = {
    type: DevicesActionTypes.FETCH_DATA_ERROR;
    payload: string;
};

type fetchTypesSuccess = {
    type: DevicesActionTypes.FETCH_TYPES_SUCCESS;
    payload: IOption[];
};

type fetchBrandsSuccess = {
    type: DevicesActionTypes.FETCH_BRANDS_SUCCESS;
    payload: IOption[];
};

type fetchDevicesSuccess = {
    type: DevicesActionTypes.FETCH_DEVICES_SUCCESS;
    payload: IDevice[];
};

type fetchDeviceSuccess = {
    type: DevicesActionTypes.FETCH_DEVICE_SUCCESS;
    payload: IDevice;
};

type setSelectedBrand = {
    type: DevicesActionTypes.SET_SELECTED_BRAND;
    payload: IOption | null;
};

type setSelectedType = {
    type: DevicesActionTypes.SET_SELECTED_TYPE;
    payload: IOption | null;
};

export enum DevicesActionTypes {
    FETCH_DATA = 'devices/fetchData',
    FETCH_DATA_ERROR = 'devices/fetchDataError',
    FETCH_TYPES_SUCCESS = 'devices/fetchTypesSuccess',
    FETCH_BRANDS_SUCCESS = 'devices/fetchBrandsSuccess',
    FETCH_DEVICES_SUCCESS = 'devices/fetchDevicesSuccess',
    FETCH_DEVICE_SUCCESS = 'devices/fetchDeviceSuccess',
    SET_SELECTED_BRAND = 'devices/setSelectedBrand',
    SET_SELECTED_TYPE = 'devices/setSelectedType',
}

export type DevicesActions =
    | fetchData
    | fetchDataError
    | fetchBrandsSuccess
    | fetchDevicesSuccess
    | fetchDeviceSuccess
    | fetchTypesSuccess
    | setSelectedBrand
    | setSelectedType;
