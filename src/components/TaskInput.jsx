import Button from "./ui/Button";
import "../style/input.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice.js";
import { v4 as uuidv4 } from "uuid";

const TaskInput = () => {
  const dispatch = useDispatch();
  const id = uuidv4();

  const [taskInput, setTaskInput] = useState("");

  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };
  const handleAddTaskBtn = () => {
    if (!taskInput) return;
    dispatch(addTodo({ id: id, task: taskInput, completed: false }));
    setTaskInput("");
  };
  return (
    <div className="taskInputContainer">
      <input
        type="text"
        name=""
        id="taskInput"
        placeholder="Add Your Task"
        onChange={handleTaskInput}
        value={taskInput}
      />
      <Button onClick={handleAddTaskBtn} id="addBtn">
        Add Task
      </Button>
    </div>
  );
};

export default TaskInput;
