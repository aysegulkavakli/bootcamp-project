import React from "react";
import BoardCard from "./BoardCard";

interface Props {
  title: string;
}
export default function BoardList({ title }: Props): JSX.Element {
  return <BoardCard title={title} />;
}
