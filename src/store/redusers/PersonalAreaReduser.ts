import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersonalAreaReduserInterface } from '../../types/user';

const initialState:PersonalAreaReduserInterface = {
    Numfild: 0.1,
    fildName: "",
    onFild: "name",
    fildNumber: "",
}
export const PersonalAreaReduser = createSlice({
  name: 'PersonalAreaReduser',
  initialState,
  reducers: {
    setNumfild: (state, action:PayloadAction<number>) => {
        state.Numfild = action.payload;
    },
    setfildName: (state, action:PayloadAction<string>) => {
        state.fildName = action.payload;
    },
    setfildNumber: (state, action:PayloadAction<string>) => {
        state.fildNumber = action.payload;
    },
    setOnFild: (state, action:PayloadAction<string>) => {
        state.onFild = action.payload;
    },
    
    
  },
})

// Action creators are generated for each case reducer function
export const { setNumfild,setfildName,setOnFild,setfildNumber } = PersonalAreaReduser.actions

export default PersonalAreaReduser.reducer;