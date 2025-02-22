import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComicItemDetail } from '../../model/components/ComicItemDetail';
import { RootState } from '../../store';

export interface ComicDetailState {
  items: {
    [key: string]: ComicItemDetail;
  };
}

const initialState: ComicDetailState = {
  items: {},
};

export const comicDetailsSlice = createSlice({
  name: 'comicDetails',
  initialState,
  reducers: {
    setComicItem: (state, action: PayloadAction<ComicItemDetail>) => {
      const comicItem = action.payload;
      if (comicItem) {
        state.items[comicItem?.id ?? 'a'] = comicItem;
      }
    },
  },
});

// Selectors to access the state

export const comicDetails = (id: string) => (state: RootState) => {
  return state.comicDetails.items[id];
};

// Action creators are generated for each case reducer function
export const { setComicItem } = comicDetailsSlice.actions;

export default comicDetailsSlice.reducer;
