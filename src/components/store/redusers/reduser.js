import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    error: null,
}

export const reduser = createSlice({
  name: 'reduser',
  initialState,
  reducers: {
    ERROR: (state, action) => {
    state.error = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { ERROR} = reduser.actions

export default reduser.reducer