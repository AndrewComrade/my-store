import {createReducer} from "@reduxjs/toolkit";
import {setBrands, setDevices, setSelectedBrand, setSelectedType, setTypes} from "../actions/deviceActions";

const initialState = {
  types: [
    {id: 1, name: 'Refrigerators'},
    {id: 2, name: 'Phones'},
    {id: 3, name: 'Notebooks'},
    {id: 4, name: 'Others'},
  ],
  selectedType: {},
  brands: [
    {id: 1, name: 'Samsung'},
    {id: 2, name: 'Xiaomi'},
    {id: 3, name: 'Lenovo'},
    {id: 4, name: 'Acer'},
    {id: 5, name: 'Asus'},
    {id: 6, name: 'Zver'},
  ],
  selectedBrand: {},
  devices: [
    {
      id: 1,
      name: 'Aphone',
      price: 2500,
      rating: 5,
      img: 'https://i.pinimg.com/originals/fb/d5/4b/fbd54b0c65fcada0999a48b6eb457ff7.jpg'
    },
    {
      id: 2,
      name: 'Bphone',
      price: 3500,
      rating: 4,
      img: 'https://i.pinimg.com/originals/fb/d5/4b/fbd54b0c65fcada0999a48b6eb457ff7.jpg',
    },
    {
      id: 3,
      name: 'Cphone',
      price: 4500,
      rating: 3,
      img: 'https://i.pinimg.com/originals/fb/d5/4b/fbd54b0c65fcada0999a48b6eb457ff7.jpg'
    },
    {
      id: 4,
      name: 'Dphone',
      price: 5500,
      rating: 2,
      img: 'https://i.pinimg.com/originals/fb/d5/4b/fbd54b0c65fcada0999a48b6eb457ff7.jpg'
    },
  ]
};

export const deviceReducer = createReducer(initialState, builder => {
  builder
    .addCase(setTypes, (state, action) => {
      state.types = action.payload
    })
    .addCase(setBrands, (state, action) => {
      state.brands = action.payload
    })
    .addCase(setDevices, (state, action) => {
      state.devices = action.payload
    })
    .addCase(setSelectedType, (state, action) => {
      state.selectedType = action.payload
    })
    .addCase(setSelectedBrand, (state, action) => {
      state.selectedBrand = action.payload
    });
});
