import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ICompletedTodo } from "../../models/TodoModel";

type ITodoSlice = {
  todos: ICompletedTodo[];
};

const initialState = {
  todos: [],
} as ITodoSlice;

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const getAllTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
