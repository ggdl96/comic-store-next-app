import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  list: string[],
  options: string[],
  count: number,
}

const initialState: CounterState = {
  list: [],
  options: [],
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload
    },
    setOptions: (state, action) => {
      state.options = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setList, setOptions } = counterSlice.actions

export default counterSlice.reducer
