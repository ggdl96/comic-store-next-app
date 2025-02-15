import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import aboutInfo from '../features/aboutInfo';

import comicsReducer from '../features/slice';
import comicDetailsReducer from '../features/comic-details';

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    comics: comicsReducer,
    aboutInfo: aboutInfo,
    comicDetails: comicDetailsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
