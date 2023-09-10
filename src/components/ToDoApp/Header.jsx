import React, { useState } from "react";
import { Button } from "@mui/material";
import { addItem, clearAll } from "./todoSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(input));
    setInput("");
  };
  return (
    <div className="todo_section">
      <input
        type="text"
        placeholder="new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo_input"
      />
      <Button variant="contained" onClick={handleAddItem} className="todo_btn">
        Add Item
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch(clearAll())}
        className="todo_btn"
      >
        Clear All
      </Button>
    </div>
  );
};

export default Header;
