# ToDo List Application

## Description

Welcome to my ToDo List application! This application functions like any other ToDo List app, allowing you to manage your tasks efficiently.

Once you enter a task in the input field and click the "Add Task" button, it will be added to the list visible in the application. The unique feature of this application is the utilization of React and Redux Toolkit with persistent storage. This means that even if you refresh the page, your ToDo list items will not be lost.

Each task in the list is accompanied by a checkbox. You can mark a task as completed by checking the box, which will draw a line through the task text, indicating that it's done. Additionally, I've included a delete button for each task, allowing you to remove tasks from your list as needed.

## Installation

To run this application locally, follow these steps:

### Dependencies

- React
- Redux Toolkit
- UUID

### Installation Steps

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Once the installation is complete, run `npm run dev` to start the application.
5. Access the application in your web browser at [http://localhost:5173](http://localhost:5173).

## Usage

To use the application:

1. Enter a task in the input field.
2. Click the "Add Task" button to add the task to your ToDo list.
3. Check the checkbox next to a task to mark it as completed.
4. Use the delete button to remove tasks from your list.

## Examples

### Example 1: Adding a Task

- **Input:** "Complete homework assignment"
- **Output:** Task added to the ToDo list.

### Example 2: Completing a Task

- **Action:** Check the checkbox next to a task.
- **Output:** Task marked as completed with a line through the text.

### Example 3: Deleting a Task

- **Action:** Click the delete button next to a task.
- **Output:** Task removed from the ToDo list.
