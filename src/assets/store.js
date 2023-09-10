import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../components/ToDoApp/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSliceReducer,
  },
});

export default store;
