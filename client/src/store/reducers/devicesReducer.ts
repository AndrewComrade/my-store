import {
    DevicesActions,
    DevicesActionTypes,
    DevicesState,
} from '~/types/devices';

const initialState: DevicesState = {
    loading: false,
    error: '',
    devices: [],
    device: null,
    page: 1,
    totalCount: 0,
    limit: 2,
};

const devicesReducer = (
    state: DevicesState = initialState,
    action: DevicesActions
) => {
    switch (action.type) {
        case DevicesActionTypes.FETCH_DEVICES:
            return { ...state, loading: true };
        case DevicesActionTypes.FETCH_DEVICES_SUCCESS:
            return { ...state, devices: action.payload, loading: false };
        case DevicesActionTypes.FETCH_DEVICE_SUCCESS:
            return { ...state, device: action.payload, loading: false };
        case DevicesActionTypes.FETCH_DEVICES_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export default devicesReducer;
