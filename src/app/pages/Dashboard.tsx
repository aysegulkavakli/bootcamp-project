import React from "react";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { AddList } from "../components";
import BoardList from "../components/BoardList";

export default function Dashboard(): JSX.Element {
  return (
    <Stack width="100%" height="100%">
      <HStack minW="150px" bgColor="#F2F4F7" justifyContent="center">
        <Text p="8" fontSize="2xl" fontWeight="semibold">
          Kanban Board
        </Text>
      </HStack>
      <HStack p="8">
        <BoardList />
        <AddList />
      </HStack>
    </Stack>
  );
}
