import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Board } from "../models";

// Define a type for the slice state
export interface BoardState {
  boards: Board[];
}

// Define the initial state using that type
const initialState: BoardState = {
  boards: [],
};

export const boardSlice: any = createSlice({
  name: "board",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<Board>) => {
      state.boards.push(action.payload);
    },
  },
});

export const { addBoard } = boardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getBoards = (state: RootState) => state.reducer.board.boards;

export default boardSlice.reducer;
