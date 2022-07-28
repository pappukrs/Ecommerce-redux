import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      data: loginData,
    });
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {Object.keys(loginData).map((el) => (
        <TextField
          id={el}
          key={el}
          value={el.loginData}
          name={el}
          onChange={handleLoginChange}
          label={el.toLocaleUpperCase()}
          variant="outlined"
        />
      ))}
      <br />
      <Button onClick={handleLogin} variant="outlined">
        Login
      </Button>
    </Box>
  );
};
