import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersonalAreaReduserInterface } from '../../types/user';

const initialState:PersonalAreaReduserInterface = {
    Numfild: 0.1,
    fild: "",
    onFild: "name",
    
}
export const PersonalAreaReduser = createSlice({
  name: 'PersonalAreaReduser',
  initialState,
  reducers: {
    setNumfild: (state, action:PayloadAction<number>) => {
        state.Numfild = action.payload;
    },
    setfild: (state, action:PayloadAction<string>) => {
        state.fild = action.payload;
    },
    setOnFild: (state, action:PayloadAction<string>) => {
        state.onFild = action.payload;
    },
    
    
  },
})

// Action creators are generated for each case reducer function
export const { setNumfild,setfild,setOnFild } = PersonalAreaReduser.actions

export default PersonalAreaReduser.reducer;