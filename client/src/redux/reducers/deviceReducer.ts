import {createReducer} from '@reduxjs/toolkit';
import {DevicesState} from '../../types/devices';
import {
  setBrands,
  setDevices,
  setLimit,
  setPage,
  setSelectedBrand,
  setSelectedType,
  setTotalCount,
  setTypes,
} from '../actions/deviceActions';

const initialState: DevicesState = {
  types: [],
  brands: [],
  devices: [],
  selectedType: null,
  selectedBrand: null,
  page: 1,
  totalCount: 0,
  limit: 2,
};

export const deviceReducer = createReducer(initialState, (builder) => {
  builder
      .addCase(setTypes, (state, action) => {
        state.types = action.payload;
      })
      .addCase(setBrands, (state, action) => {
        state.brands = action.payload;
      })
      .addCase(setDevices, (state, action) => {
        state.devices = action.payload;
      })
      .addCase(setSelectedType, (state, action) => {
        state.selectedType = action.payload;
        state.page = 1;
      })
      .addCase(setSelectedBrand, (state, action) => {
        state.selectedBrand = action.payload;
        state.page = 1;
      })
      .addCase(setPage, (state, action) => {
        state.page = action.payload;
      })
      .addCase(setTotalCount, (state, action) => {
        state.totalCount = action.payload;
      })
      .addCase(setLimit, (state, action) => {
        state.limit = action.payload;
      });
});
