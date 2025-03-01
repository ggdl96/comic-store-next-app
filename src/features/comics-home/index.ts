import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComicItem } from '../../model/components/ComicItem';
import { RootState } from '../../store';

export interface ComicsHomeState {
  list: ComicItem[];
}

const initialState: ComicsHomeState = {
  list: [],
};

export const comicsHomeSlice = createSlice({
  name: 'comicsHome',
  initialState,
  reducers: {
    setComicList: (state, action: PayloadAction<ComicItem[]>) => {
      state.list = action.payload;
    },
  },
});

// Selectors to access the state

export const selectComicsHomeList = (state: RootState) => state.comicsHome.list;

// Action creators are generated for each case reducer function
export const { setComicList } = comicsHomeSlice.actions;

export default comicsHomeSlice.reducer;
