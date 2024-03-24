import React from "react";
import ToDoItem from "./ToDoItem";

const List = () => {
  return (
    <div
      style={{
        scrollbarWidth: "none",
        overflow: "auto",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* keys bhi add krni hai */}
      <ToDoItem title="test 1" desc="do this thing"/>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
};

export default List;
