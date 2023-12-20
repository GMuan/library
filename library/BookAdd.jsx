import React, { useState } from "react";
import "./BookAdd.css";

function BookAdd({ onCreate }) {
  const [title, setTitle] = useState("");

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (title.trim() !== "") {
      onCreate(title);
      setTitle("");
    }
  }

  return (
    <div className="BookAdd">
      <h3>도서 등록</h3>
      <form onSubmit={onSubmit}>
        <input
          value={title}
          onChange={onChangeTitle}
          placeholder="새로운 도서 등록"
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default BookAdd;