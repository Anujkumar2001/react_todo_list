import React from "react";
import TaskInput from "../components/TaskInput";
import "../style/todolist.css";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="taskCardContainer">
        <div className="title">
          {" "}
          <h1>React To-Do Application</h1>
        </div>

        {/* TaskListInput component where users can add tasks */}
        <TaskInput />

        {/* TaskList component where all user-given tasks are displayed. */}
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
