import {createAction} from '@reduxjs/toolkit';

export const setTypes = createAction('devices/SET_TYPES');
export const setBrands = createAction('devices/SET_BRANDS');
export const setDevices = createAction('devices/SET_DEVICES');
export const setSelectedType = createAction('devices/SET_SELECTED_TYPE');
export const setSelectedBrand = createAction('devices/SET_SELECTED_BRAND');
