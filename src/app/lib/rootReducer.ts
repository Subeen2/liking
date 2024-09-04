// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
// import your reducers here
// 이거 꼭 이런 형식으로 작성해야 함.!!!!
import userAuthReducer from "./features/userAuth/userAuthSlice";

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  // add more reducers here
});

export default rootReducer;
