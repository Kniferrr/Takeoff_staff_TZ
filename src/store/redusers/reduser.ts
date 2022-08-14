import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/user';

const initialState : UserState = {
    error: null,
    user: {},
    isAuth: false,
    access_token: "",
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
      console.log("good login")
    },
    SetUser: (state, action:PayloadAction<object>) => {
      state.user = action.payload;
      console.log("setUser")
    },
    SetAccessToken: (state, action:PayloadAction<string>) => {
      state.access_token = action.payload;
      console.log(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { ERROR,SetAuth,SetUser,SetAccessToken} = reduser.actions

export default reduser.reducer;