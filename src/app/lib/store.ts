import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const loadState = () => {
  const serializedState = localStorage.getItem("reduxState");
  if (serializedState === null) {
    return undefined;
  }

  const parsedState = JSON.parse(serializedState);

  // 로컬 스토리지의 상태를 rootReducer의 구조에 맞게 변환
  return {
    userAuth: parsedState, // userAuth로 감싸기
  };
};

const saveState = (state: RootState) => {
  const serializedState = JSON.stringify(state.userAuth); // userAuth만 저장
  console.log("Saving state:", serializedState);
  localStorage.setItem("reduxState", serializedState);
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
