import { Card, Board } from "./index";

export type List = {
  title: string;
  board: Board;
  order: number;
  cards: Card[];
};
