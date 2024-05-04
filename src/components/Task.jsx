import React from "react";
import Button from "./ui/Button";
import { useDispatch } from "react-redux";
import { toggleCompleteTask, deleteTodo } from "../redux/todoSlice";

const Task = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTaskStatus = (e) => {
    dispatch(toggleCompleteTask(todo));
  };

  const handleDeleteBtn = () => {
    dispatch(deleteTodo(todo));
  };
  return (
    <div className="taskContainer">
      <div className="taskAction">
        <input
          type="checkbox"
          id="myCheckbox"
          value={todo.completed}
          onChange={toggleTaskStatus}
          checked={todo.completed ? true : false}
        />
        <label for="myCheckbox" class="checkbox-circle"></label>
        <p className={` ${todo.completed ? "completedTask" : ""}`}>
          {todo.task}
        </p>
      </div>
      <Button className="deleteBtn" onClick={handleDeleteBtn}>
        X
      </Button>
    </div>
  );
};

export default Task;
