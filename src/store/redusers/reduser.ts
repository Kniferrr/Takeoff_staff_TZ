import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactsInterface, UserState } from '../../types/user';

const initialState : UserState = {
    error: null,
    user: "",
    isAuth: false,
    access_token: "",
    contacts: [],
    search: ""
}

export const reduser = createSlice({
  name: 'reduser',
  initialState,
  reducers: {
    ERROR: (state, action:PayloadAction<string>) => {
    state.error = action.payload; 
    },
    SetAuth: (state, action:PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    SetUser: (state, action:PayloadAction<string>) => {
      state.user = action.payload;
    },
    SetAccessToken: (state, action:PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    SetContacts: (state, action:PayloadAction<Array<ContactsInterface>>) => {
      state.contacts = action.payload;
    },
    SetSearch: (state, action:PayloadAction<string>) => {
      state.search = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { ERROR,SetAuth,SetUser,SetAccessToken, SetContacts,SetSearch} = reduser.actions

export default reduser.reducer;