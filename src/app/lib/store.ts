import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log("Could not load state", e);
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    console.log("Saving state:", serializedState);
    localStorage.setItem("reduxState", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const preloadedState = loadState();

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// Create store instance
const store = makeStore();

// 아래와 같이 하면 타입 오류가 발생
// const store =  configureStore({
//  reducer: rootReducer,
//  preloadedState
// })

// Subscribe to store updates and save state to localStorage
store.subscribe(() => {
  const state = store.getState();
  console.log("State changed:", state); // 디버깅을 위한 로그
  saveState(state);
});

// Infer the type of the store
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
