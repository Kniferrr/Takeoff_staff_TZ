import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/user';

const initialState : UserState = {
    error: null,
    user: "",
    isAuth: false,
    access_token: "",
    contacts: []
}

export const reduser = createSlice({
  name: 'reduser',
  initialState,
  reducers: {
    ERROR: (state, action:PayloadAction<string>) => {
    state.isAuth = false;
    state.error = action.payload;
    },
    SetAuth: (state, action:PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    SetUser: (state, action:PayloadAction<any>) => {
      state.user = action.payload;
    },
    SetAccessToken: (state, action:PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    SetContacts: (state, action:PayloadAction<any>) => {
      state.contacts = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { ERROR,SetAuth,SetUser,SetAccessToken, SetContacts} = reduser.actions

export default reduser.reducer;