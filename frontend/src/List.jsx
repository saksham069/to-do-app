import React from "react";
import ToDoItem from "./ToDoItem";

let items = [
  <ToDoItem title="test 1" desc="do this thing" />,
];

$("#new-to-do").on("click", () => {
  items.push(<ToDoItem />); // use state hook
});

const List = () => {
  return (
    <div
      style={{
        scrollbarWidth: "none",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* keys bhi add krni hai */}
      {...items}
    </div>
  );
};

export default List;
