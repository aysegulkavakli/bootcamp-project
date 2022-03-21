import React, { useState } from "react";
import axios from "axios";
import { AxiosInstance } from "../../AxiosClient";
import { Button, Input, Stack } from "@chakra-ui/react";

interface UserLogin {
  username: string;
  password: string;
}

interface Props {
  setLoggedIn: (value: boolean) => void;
}
export default function Login({ setLoggedIn }: Props) {
  const [data, setData] = useState<UserLogin>({ username: "", password: "" });
  const [token, setToken] = useState();

  const config = {
    headers: { Authorization: ~`Bearer ${token}` },
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...data };
    newData[e.currentTarget.name as keyof UserLogin] = e.currentTarget.value;
    setData(newData);
  };
  function login() {
    axios
      .post("http://localhost:80/auth/login", data, config)
      .then(function (response) {
        setToken(response.data.token);
        AxiosInstance.defaults.headers.common[
          "authorization"
        ] = `Bearer ${response.data.token}`;
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Stack direction="column" width="50%" spacing={2} color="primary">
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
      <Button variant="filled" type="submit" onClick={() => login()}>
        Sign in
      </Button>
    </Stack>
  );
}
