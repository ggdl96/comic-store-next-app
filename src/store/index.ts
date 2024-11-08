import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import comicsReducer from '../features/slice';

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    comics: comicsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
