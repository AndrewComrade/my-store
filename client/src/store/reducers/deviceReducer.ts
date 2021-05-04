import {
    DevicesActions,
    DevicesActionTypes,
    DevicesState,
} from '~/types/devices';

const initialState: DevicesState = {
    loading: false,
    error: '',
    types: [],
    brands: [],
    devices: [],
    selectedType: null,
    selectedBrand: null,
    page: 1,
    totalCount: 0,
    limit: 2,
};

const deviceReducer = (
    state: DevicesState = initialState,
    action: DevicesActions
) => {
    switch (action.type) {
        case DevicesActionTypes.FETCH_DATA:
            return { ...state, loading: true };
        case DevicesActionTypes.FETCH_TYPES_SUCCESS:
            return { ...state, types: action.payload, loading: false };
        case DevicesActionTypes.FETCH_BRANDS_SUCCESS:
            return { ...state, brands: action.payload, loading: false };
        case DevicesActionTypes.FETCH_DEVICES_SUCCESS:
            return { ...state, devices: action.payload, loading: false };
        case DevicesActionTypes.FETCH_DEVICE_SUCCESS:
            return { ...state, device: action.payload, loading: false };
        case DevicesActionTypes.FETCH_DATA_ERROR:
            return { ...state, error: action.payload, loading: false };
        case DevicesActionTypes.SET_SELECTED_BRAND:
            return { ...state, selectedBrand: action.payload };
        case DevicesActionTypes.SET_SELECTED_TYPE:
            return { ...state, selectedType: action.payload };
        default:
            return state;
    }
};

export default deviceReducer;
