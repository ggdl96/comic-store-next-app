import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComicItem } from '../../model/components/ComicItem';
import { RootState } from '../../store';

export interface ComicListState {
  items: ComicItem[];
}

const initialState: ComicListState = {
  items: [],
};

export const comicListSlice = createSlice({
  name: 'comicList',
  initialState,
  reducers: {
    addComicItem: (state, action: PayloadAction<ComicItem>) => {
      const comicItem = action.payload;
      if (comicItem) {
        state.items.push(comicItem);
      }
    },
    setComicList: (state, action: PayloadAction<ComicItem[]>) => {
      state.items = action.payload;
    },
  },
});

// Selectors to access the state

export const comicList = (state: RootState) => {
  return state.comicList.items;
};

// Action creators are generated for each case reducer function
export const { addComicItem, setComicList } = comicListSlice.actions;

export default comicListSlice.reducer;
