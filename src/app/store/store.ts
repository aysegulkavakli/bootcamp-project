import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { boardSlice, BoardState } from "./board.slice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  board: boardSlice as Reducer<BoardState>,
});
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["board"], //Things u want to persist
};
// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
