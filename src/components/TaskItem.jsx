import React from "react";
import Button from "./UI/buttons/Button";
import Checkbox from "./UI/buttons/Checkbox";
import "./TaskItem.css"

export default function TaskItem({title, body,  removeTask,  completed, checked}) {



  return (
    <div className="task" style={checked ? {backgroundColor: "rgb(210, 210, 210)"} : {backgroundColor: "rgb(244, 244, 244)"}}>
      <div className="task__content" >
        <strong style={checked ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{title}</strong>
        <p style={checked ? {textDecoration: "line-through"} : {textDecoration: "none"}}> {body}</p>
        <Checkbox onChange={completed} checked={checked}/>
        <Button onClick={removeTask}></Button>
      </div>
    </div>
  );
}
