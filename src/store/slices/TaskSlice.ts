import { createSlice } from "@reduxjs/toolkit";
import type { TaskSliceType } from "../../types/TaskSliceTypes";


const initialState: TaskSliceType = {
  tasksList: [],
};

 const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasksList.push(action.payload)
    },
 
  },
});



export const { addTask } = TaskSlice.actions;

export default TaskSlice.reducer