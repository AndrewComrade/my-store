import {createReducer} from "@reduxjs/toolkit";
import {setAuth} from "../actions/userActions";

const initialState = {
  isAuth: true,
};

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(setAuth, (state, action) => {
      state.isAuth = action.payload
    });
});
