import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/slices/TaskSlice";
import type { TaskSliceType, TaskType } from "../types/TaskSliceTypes";
import { useState } from "react";
import type { RootState } from "../types/storeTypes";

export const CreateTask = () => {
  const [taskUser, setTaskUser] = useState("");
  const dispatch = useDispatch(); //mandar info al store
  const tasks = useSelector((state: RootState) => state.taskReducer.tasksList); //traer info del store

  const handleTask = (e: any) => {
    e.preventDefault();
    dispatch(addTask(taskUser));
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Task name"
          onChange={(e) => setTaskUser(e.target.value)}
        />
        <button onClick={(e) => handleTask(e)}>Create Task</button>
      </form>

      <section>
        {tasks.map((task: TaskType) => (
          <p key={task.task}>{task.task}</p>
        ))}
      </section>
    </>
  );
};
