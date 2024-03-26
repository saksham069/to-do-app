import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

const List = () => {
  const [items, setItems] = useState([]);

  fetch("/data").then((res) => {
    res.json().then((data) => {
      setItems(data);
      console.log(items);
    });
  });

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
      {items.map((i) => (
        <ToDoItem {...i} />
      ))}
    </div>
  );
};

export default List;
