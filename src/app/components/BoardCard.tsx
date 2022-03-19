import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BoardEditor } from "./index";

interface Props {
  title: string;
  editMode?: boolean;
  onClick?: () => void;
}
export default function BoardCard({
  title,
  editMode,
  onClick,
}: Props): JSX.Element {
  const navigate = useNavigate();
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
      onClick={onClick}
    >
      <Text>{title}</Text>
      {editMode && <BoardEditor />}
    </Box>
  );
}
