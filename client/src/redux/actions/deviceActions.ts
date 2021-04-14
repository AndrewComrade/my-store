import {createAction} from '@reduxjs/toolkit';
import {IDevice, DevicesActionTypes, IOptions} from '../../types/devices';

export const setTypes = createAction<IOptions[]>(DevicesActionTypes.SET_TYPES);
export const setBrands = createAction<IOptions[]>(DevicesActionTypes.SET_BRANDS);
export const setDevices = createAction<IDevice[]>(DevicesActionTypes.SET_DEVICES);
export const setSelectedType = createAction<IOptions | null>(DevicesActionTypes.SET_SELECTED_TYPE);
export const setSelectedBrand = createAction<IOptions | null>(DevicesActionTypes.SET_SELECTED_BRAND);
export const setPage = createAction<number>(DevicesActionTypes.SET_PAGE);
export const setTotalCount = createAction<number>(DevicesActionTypes.SET_TOTAL_COUNT);
export const setLimit = createAction<number>(DevicesActionTypes.SET_LIMIT);
