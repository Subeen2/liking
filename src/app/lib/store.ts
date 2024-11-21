import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
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

// 11/21 이전 기존 코드
// export const makeStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState,
//   });
// };
// const store = makeStore();

// 아래와 같이 하면 타입 오류가 발생
// const store =  configureStore({
//  reducer: rootReducer,
//  preloadedState
// })

// Subscribe to store updates and save state to localStorage
// store.subscribe(() => {
//   const state = store.getState();
//   saveState(state);
// });

// 11/21 이후 코드
// Redux store 생성
export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  // 상태 변화 시마다 로컬 스토리지에 저장
  store.subscribe(() => {
    const state = store.getState();
    saveState(state);
  });

  return store;
};

export const wrapper = createWrapper(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
