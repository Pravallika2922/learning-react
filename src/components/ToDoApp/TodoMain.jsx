import React from "react";
import Header from "./Header";
import List from "./List";
import { Typography } from "@mui/material";
import "./todo.css";

function TodoMain() {
  return (
    <div className="todo_view">
      <Typography
        ariant="h3"
        sx={{ color: "#AC3B61" }}
        className="todo_heading"
      >
        To Do Items
      </Typography>
      <Header />
      <List />
    </div>
  );
}

export default TodoMain;
