import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  list: string[];
  options: string[];
  searchingOptions: boolean;
}

const initialState: CounterState = {
  list: [],
  options: [],
  searchingOptions: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload
    },
    searchOptions: (state, action) => {
      console.log('searchOptions> ', action.payload);
      state.searchingOptions = true;
    },
    setOptions: (state, action) => {
      console.log('setOptions> ', action.payload);
      state.options = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setList, setOptions, searchOptions } = counterSlice.actions

export default counterSlice.reducer
