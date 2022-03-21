import React, { useState } from "react";
import axios from "axios";
import { Button, Input, Stack } from "@chakra-ui/react";

interface User {
  username: string;
  password: string;
  passwordConfirm: string;
}
export default function Register() {
  const [data, setData] = useState<User>({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData: User = { ...data };
    newData[e.currentTarget.name as keyof User] = e.currentTarget.value;
    setData(newData);
  };
  function register() {
    axios
      .post("http://localhost:80/auth/register", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Stack direction="column" width="50%" spacing={2}>
      <Input
        placeholder="Username"
        name="username"
        value={data.username}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password Confirmation"
        name="passwordConfirm"
        value={data.passwordConfirm}
        onChange={handleChange}
      />
      <Button variant="filled" type="submit" onClick={() => register()}>
        Register
      </Button>
    </Stack>
  );
}
