import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ListOptionsState {
  list: string[];
  options: string[];
  searchingOptions: boolean;
  searchError: string | null;
  searchTerm: string;
}

const initialState: ListOptionsState = {
  list: [],
  options: [],
  searchingOptions: false,
  searchError: null,
  searchTerm: '',
};

export const listOptionsSlice = createSlice({
  name: 'listOptions',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<string[]>) => {
      state.list = action.payload;
    },
    searchOptions: (state, action: PayloadAction<string>) => {
      state.searchingOptions = true;
      state.searchTerm = action.payload;
      state.searchError = null;
    },
    searchOptionsSuccess: state => {
      state.searchingOptions = false;
      state.searchError = null;
    },
    searchOptionsError: (state, action: PayloadAction<string>) => {
      state.searchingOptions = false;
      state.searchError = action.payload;
    },
    setOptions: (state, action: PayloadAction<string[]>) => {
      state.options = action.payload;
    },
  },
});

// Selectors to access the state
export const selectList = (state: RootState) => state.comics.list;
export const selectOptions = (state: RootState) => state.comics.options;
export const selectIsSearching = (state: RootState) => state.comics.searchingOptions;
export const selectSearchError = (state: RootState) => state.comics.searchError;

// Action creators are generated for each case reducer function
export const { setList, setOptions, searchOptions } = listOptionsSlice.actions;

export default listOptionsSlice.reducer;
