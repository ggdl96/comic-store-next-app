import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComicItem } from '../../model/components/ComicItem';
import { RootState } from '../../store';

export interface ComicsBestsellersState {
  list: ComicItem[];
}

const initialState: ComicsBestsellersState = {
  list: [],
};

export const comicsBestsellersSlice = createSlice({
  name: 'comicsBestsellers',
  initialState,
  reducers: {
    setBestsellersList: (state, action: PayloadAction<ComicItem[]>) => {
      state.list = action.payload;
    },
  },
});

// Selectors to access the state
export const selectComicsBestsellersList = (state: RootState) => state.comicsBestsellers.list;

// Action creators are generated for each case reducer function
export const { setBestsellersList } = comicsBestsellersSlice.actions;

export default comicsBestsellersSlice.reducer;
