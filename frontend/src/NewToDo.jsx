//styles in App.css
import React, { useState } from "react";

const NewToDo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <form
      className="input"
      id="input-form"
      // action="/submit"
      // method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("desc", desc);
        fetch("/submit", { method: "POST", body: formData });
      }}
    >
      <div className="item">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
      </div>
      <div className="item">
        <label for="desc">Description</label>
        <input
          type="text"
          name="desc"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          required
        />
      </div>
      <div className="item">
        <button type="submit" id="new-to-do">
          ✔️
        </button>
      </div>
    </form>
  );
};

export default NewToDo;
