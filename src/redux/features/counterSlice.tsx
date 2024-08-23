import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type typeNumber = {
  count: number;
};
const initialState: typeNumber = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state) => {
      state.count = state.count + 1; // emutibalilte korbe na , enum use kore ? :: state.count ?
    },
    value: (state, action) => {
      state.count = state.count + action.payload.point; // emutibalilte korbe na , enum use kore ? :: state.count ?
    },
    addByValue: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload; // emutibalilte korbe na , enum use kore ? :: state.count ?
    },
    remove: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { add, remove, addByValue, value } = counterSlice.actions;
export default counterSlice.reducer;
