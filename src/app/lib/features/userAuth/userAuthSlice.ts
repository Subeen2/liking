import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isAuthenticated: boolean;
  user: {
    user_uid: string;

    email: string;
    nickname: string;
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
    login: (
      state,
      action: PayloadAction<{
        user_uid: string;
        email: string;
        nickname: string;
      }>
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("reduxState", JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("reduxState");
    },
  },
});

export const { login, logout } = userAuthSlices.actions;

export default userAuthSlices.reducer;
