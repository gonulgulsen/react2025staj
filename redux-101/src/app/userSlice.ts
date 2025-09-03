import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  email: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string }>) {
      state.email = action.payload.email;
      state.token = "1234";
    },
    logOff: () => initialState,
  },
});

export const { login, logOff } = userSlice.actions;
export default userSlice.reducer;

//Selectors (slice içinde yazılır genelde)

export const selectEmail = (state: RootState) => state.user.email