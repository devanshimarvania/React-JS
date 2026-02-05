import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.tasks.push(action.payload);
      },
      prepare: (title) => ({
        payload: {
          id: nanoid(),
          title,
          completed: false,
        },
      }),
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },

    toggleComplete: (state, action) => {
      const task = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;
