import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../component/Login";
import { Home } from "../component/Home";
import { Private } from "../Private/Private";
export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Private><Home /></Private>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};


