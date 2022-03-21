import React, { useEffect } from "react";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { AddBoard, BoardCard } from "../components";
import { AxiosInstance } from "../AxiosClient";
import { getBoards, setBoard } from "../store/board.slice";
import { useDispatch, useSelector } from "react-redux";
import { Board } from "../models";

export default function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  // @ts-ignore
  const boards: Board[] = useSelector((state: any) => getBoards(state));
  console.log("boardssss", boards);
  useEffect(() => {
    AxiosInstance.get("http://localhost:80/board")
      .then(function (response) {
        dispatch(setBoard(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Stack width="100%" height="100%">
      <HStack minW="150px" bgColor="#F2F4F7" justifyContent="center">
        <Text p="8" fontSize="2xl" fontWeight="semibold">
          Kanban Board
        </Text>
      </HStack>
      <HStack p="8">
        {boards.length > 0 && boards.map((b) => <BoardCard title={b.title} />)}
        <AddBoard />
      </HStack>
    </Stack>
  );
}
