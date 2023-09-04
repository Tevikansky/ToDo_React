import React, { useState } from "react";
import Button from "./UI/buttons/Button";
import "./FormAddTask.css";

export default function FormAddTask({ addTask, closeModal }) {
  const [task, setTask] = useState({ title: "", body: "" });
  const addNewTask = (e) => {
    e.preventDefault();
    const newPost = {
      ...task,
      id: Date.now(),
      completed: false,
    };
    addTask(newPost);
    setTask({ title: "", body: "" });
    closeModal();
  };

  return (
    <form>
      <input
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        type="text"
        placeholder="Enter new task"
      />
      <input
        value={task.body}
        onChange={(e) => setTask({ ...task, body: e.target.value })}
        type="text"
        placeholder="Enter describe task (optional)"
      />
      <Button className="add-btn" onClick={addNewTask}>
        +
      </Button>
    </form>
  );
}
