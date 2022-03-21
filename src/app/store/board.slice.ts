import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Board } from "../models";

export interface BoardState {
  boards: Board[];
}

const initialState: BoardState = {
  boards: [],
};

export const boardSlice: any = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state: any, action: PayloadAction<Board>) => {
      state.boards.push(action.payload);
    },
    setBoard: (state: any, action: PayloadAction<Board[]>) => {
      state.boards = action.payload;
    },
  },
});

export const { addBoard, setBoard } = boardSlice.actions;

export const getBoards = (state: RootState) => state.board.boards;

export default boardSlice.reducer;
