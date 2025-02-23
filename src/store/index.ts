import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import aboutInfo from '../features/aboutInfo';

import comicsReducer from '../features/slice';
import comicListReducer from '../features/comic-list';
import comicDetailsReducer from '../features/comic-details';
import cartReducer from '../features/cart';

const persistConfig = {
  key: 'root',
  storage,
};
export const sagaMiddleware = createSagaMiddleware();

const cartPersistedReducer = persistReducer(persistConfig, cartReducer);
const aboutInfoPersistedReducer = persistReducer(persistConfig, aboutInfo);

const rootReducer = combineReducers({
  comics: comicsReducer,
  aboutInfo: aboutInfoPersistedReducer,
  comicDetails: comicDetailsReducer,
  comicList: comicListReducer,
  cart: cartPersistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
