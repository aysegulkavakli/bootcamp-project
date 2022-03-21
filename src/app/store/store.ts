import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { boardSlice, BoardState } from "./board.slice";

const rootReducer = combineReducers({
  boards: boardSlice.reducer,
});
export const store = configureStore({
  reducer: {
    board: rootReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
