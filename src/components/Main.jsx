import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import { AddTask } from "./AddTask";
import "./Main.css";

export default function Main() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addtask = (newTask) => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        id: newTask.id,
        title: newTask.title,
        completed: newTask.completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks((prev) => [data, ...prev]);
      });
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const changeCompleted = (id) => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
          , {
        method: 'PUT',
        body: JSON.stringify({
          completed: false
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then((response) => response.json())
      .then((json) => 
      setTasks((prev) => {
        const arr = prev.map((item) => { 
          if (item.id === json.id) {
            let completed = !item.completed;
            return { ...item, completed };
          }
          return item;
        });
        return arr;
      })
      );

    
  };

  return (
    <main>
      <div className="create-task">
        <TaskList
          tasks={tasks}
          delTask={deleteTask}
          twigleState={changeCompleted}
        />
      </div>
      <AddTask addFunc={addtask} />
    </main>
  );
}
