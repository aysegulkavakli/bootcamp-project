import { Box, Button, Input } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { BoardCard } from "./index";

export default function BoardEditor(): JSX.Element {
  const [title, setTitle] = useState("");
  const [components, setComponents] = useState([{ title: "" }]);

  function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }
  function addComponent() {
    setComponents([...components, { title: title }]);
  }
  return (
    <>
      <Input
        placeholder="Enter list title..."
        value={title}
        onChange={handleChangeTitle}
      >
        + Add Board
      </Input>
      <Button>Kaydet</Button>
    </>
  );
}
