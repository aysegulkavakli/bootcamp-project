import React from "react";
import BoardCard from "./BoardCard";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Board } from "../models";
import { getBoards } from "../store/board.slice";

export default function BoardList(): JSX.Element {
  //const boards: Board[] = useSelector((state: RootState) => getBoards(state));
  return (
    <>
      <BoardCard title={"any"} />
    </>
  );
}
