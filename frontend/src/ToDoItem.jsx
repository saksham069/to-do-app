import React from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  return (
    <div className="todo-container">
      <h2>{props.title ?? "Title"}</h2>
      <p>{props.desc ?? "Description"}</p>
    </div>
  );
};

export default ToDoItem;
