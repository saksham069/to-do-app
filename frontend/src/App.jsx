import React from "react";
import "./App.css";
import List from "./List";

const App = () => {
  return (
    <>
      <h1>My To-Do List</h1>
      <div className="container">
        <div className="input-div">
          <div className="item">
            <label>Title</label>
            <input type="text" name="title" />
          </div>
          <div className="item">
            <label>Description</label>
            <input type="text" name="title" />
          </div>
          <div className="item">
            <button type="submit" id="new-to-do">✔️</button>
          </div>
        </div>
        <hr />
          <List />
      </div>
    </>
  );
};

export default App;
