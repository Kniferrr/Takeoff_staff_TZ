import { configureStore } from '@reduxjs/toolkit'
import reduser from './redusers/reduser'


export default configureStore({
  reducer: {
    reduser: reduser,
},
})