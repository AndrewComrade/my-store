import {createReducer} from '@reduxjs/toolkit';
import {
  setBrands,
  setDevices,
  setSelectedBrand,
  setSelectedType,
  setTypes,
} from '../actions/deviceActions';

const initialState = {
  types: [],
  brands: [],
  selectedType: {},
  selectedBrand: {},
  devices: [],
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
      })
      .addCase(setSelectedBrand, (state, action) => {
        state.selectedBrand = action.payload;
      });
});
