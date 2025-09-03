import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      if (state.value === 0) {
        return;
      }
      state.value -= 1;
    },
    reset: () => initialState,
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

//Public'e çekiyoruz
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;

