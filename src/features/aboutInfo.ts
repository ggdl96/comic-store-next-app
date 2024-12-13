import { createSlice } from '@reduxjs/toolkit';

export interface AboutInfoState {
  display: boolean;
}

const initialState: AboutInfoState = {
  display: false,
};

export const aboutInfoSlice = createSlice({
  name: 'aboutInfo',
  initialState,
  reducers: {
    toggleDisplay: state => {
      state.display = !state.display;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDisplay } = aboutInfoSlice.actions;

export default aboutInfoSlice.reducer;
