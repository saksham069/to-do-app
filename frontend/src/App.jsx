import React from "react";
import "./App.css";
import List from "./List";
import NewToDo from "./NewToDo";

const App = () => {
  return (
    <>
      <h1>My To-Do List</h1>
      <div className="container">
        <NewToDo />
        <hr />
        <List />
      </div>
    </>
  );
};

export default App;
