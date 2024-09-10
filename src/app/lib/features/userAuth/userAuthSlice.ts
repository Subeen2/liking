import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isAuthenticated: boolean;
  user: {
    uid: string;
    email: string;
  } | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
};

const userAuthSlices = createSlice({
  name: "userAuth", // slice 식별
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ uid: string; email: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = userAuthSlices.actions;

export default userAuthSlices.reducer;
