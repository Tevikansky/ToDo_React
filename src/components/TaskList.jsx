import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks, delTask, twigleState }) {
  const rTask = (e) => {
    delTask(e);
  };


  return (
    <div className="task-list">
      <h1>In progress</h1>
      {tasks.find((t) => t.completed === false) ? (
        tasks.map((t) => {
          if (!t.completed) {
            return (
              <TaskItem
                key={t.id}
                title={t.title}
                body={t.body}
                removeTask={() => rTask(t.id)}
                completed={() => twigleState(t.id)}
                checked={t.completed}
              />
            );
          }
          return null;
        })
      ) : (
        <p>No tasks!</p>
      )}
      <h1>Completed</h1>
      {tasks.find((t) => t.completed === true) ? (
        tasks.map((t) => {
          if (t.completed) {
            return (
              <TaskItem
                key={t.id}
                title={t.title}
                body={t.body}
                removeTask={() => rTask(t.id)}
                completed={() => twigleState(t.id)}
                checked={t.completed}
                className="TI-completed"
              />
            );
          }
          return null;
        })
      ) : (
        <p>No tasks!</p>
      )}
    </div>
  );
}
