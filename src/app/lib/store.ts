import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }

    const parsedState = JSON.parse(serializedState);

    // 로컬 스토리지의 상태를 rootReducer의 구조에 맞게 변환
    return {
      userAuth: parsedState, // userAuth로 감싸기
    };
  } catch (e) {
    console.log("Could not load state", e);
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state.userAuth); // userAuth만 저장
    localStorage.setItem("reduxState", serializedState);
  } catch (e) {
    console.log("Could not save state", e);
    return undefined;
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
  saveState(state);
});

// Infer the type of the store
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
