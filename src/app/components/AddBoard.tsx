import React, { ChangeEvent, useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addBoard } from "../store/board.slice";
import { AxiosInstance } from "../AxiosClient";

export default function AddBoard(): JSX.Element {
  const dispatch = useDispatch();

  const [isEditMode, setEditMode] = useState(false);
  const [title, setTitle] = useState<string>("");

  function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value as string);
  }

  function AddBoard() {
    AxiosInstance.post("http://localhost:80/board", { title })
      .then(function () {
        dispatch(addBoard(title));
        setEditMode(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Box
      display="flex "
      justifyContent="center"
      alignItems="center"
      borderRadius="8"
      minW="300px"
      minH="200px"
      bgColor="white"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
      onClick={() => setEditMode(true)}
    >
      {isEditMode ? (
        <>
          <Input
            placeholder="Enter list title..."
            value={title}
            onChange={handleChangeTitle}
          />
          <Button onClick={() => AddBoard()}>Kaydet</Button>
        </>
      ) : (
        <Text>+ Add Board</Text>
      )}
    </Box>
  );
}
