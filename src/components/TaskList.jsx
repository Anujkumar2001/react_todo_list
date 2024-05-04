import React from "react";
import Button from "./ui/Button";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = () => {
  const todo = useSelector((state) => state.todo.todo);
  console.log(todo);
  return (
    <div
      className={`taskListContainer ${
        todo.length == 0 ? "taskListMessage" : ""
      }`}
    >
      {todo?.map((el, index) => (
        <Task todo={el} key={index} />
      ))}
      {todo == 0 && <h1>your task list is empty</h1>}
    </div>
  );
};

export default TaskList;
