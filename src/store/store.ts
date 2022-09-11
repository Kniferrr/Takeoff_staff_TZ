import { configureStore } from '@reduxjs/toolkit'
import PersonalAreaReduser from './redusers/PersonalAreaReduser';
import reduser from './redusers/reduser';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    reduser: reduser,
    PersonalAreaReduser: PersonalAreaReduser,
},
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
},
);

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch