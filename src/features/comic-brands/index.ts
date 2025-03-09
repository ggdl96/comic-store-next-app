import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brand } from '../../model/components/Brand';
import { RootState } from '../../store';

export interface BrandListState {
  items: Brand[];
}

const initialState: BrandListState = {
  items: [],
};

export const brandListSlice = createSlice({
  name: 'brandList',
  initialState,
  reducers: {
    setBrandList: (state, action: PayloadAction<Brand[]>) => {
      state.items = action.payload;
    },
  },
});

// Selectors to access the state

export const brandList = (state: RootState) => {
  return state.brandList.items;
};

// Action creators are generated for each case reducer function
export const { setBrandList } = brandListSlice.actions;

export default brandListSlice.reducer;
