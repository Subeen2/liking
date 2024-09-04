import { createSlice } from "@reduxjs/toolkit";

const userAuthSlices = createSlice({
  name: "userAuth", // slice 식별
  initialState: { name: "subeen" },
  reducers: {
    setUserAuth: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setUserAuth } = userAuthSlices.actions;

export default userAuthSlices.reducer;
