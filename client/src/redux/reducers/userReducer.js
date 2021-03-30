import {createReducer} from "@reduxjs/toolkit";
import {setAuth, setUser} from "../actions/userActions";

const initialState = {
  isAuth: false,
  user: {},
};

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(setAuth, (state, action) => {
      state.isAuth = action.payload
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload
    });
});
