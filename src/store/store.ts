import { configureStore } from '@reduxjs/toolkit'
import PersonalAreaReduser from './redusers/PersonalAreaReduser';
import reduser from './redusers/reduser'


export const store = configureStore({
  reducer: {
    reduser: reduser,
    PersonalAreaReduser: PersonalAreaReduser,
},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch