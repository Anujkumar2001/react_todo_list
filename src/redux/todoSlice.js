import { compose, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    toggleCompleteTask: (state, action) => {
      let filteredTask = state.todo.filter(
        (task) => task.id === action.payload.id
      )[0];

      const index = state.todo.indexOf(filteredTask);

      if (filteredTask) {
        filteredTask = {
          ...filteredTask,
          completed: !action.payload.completed,
        };
        state.todo[index] = filteredTask;
        state.todo = [...state.todo];
      }
    },
    deleteTodo: (state, action) => {
      const remainingData = state.todo.filter(
        (task) => task.id !== action.payload.id
      );
      state.todo = [...remainingData];
    },
  },
});

export const { addTodo, toggleCompleteTask, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
