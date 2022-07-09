import React, { useState } from "react";

const ToDoForm = ({ addTask, showBorder }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.length > 0) {
      addTask(userInput);
    }
    setUserInput("");
  };

  const classN = showBorder
    ? "formElements theBorder"
    : "formElements theBorderClearx";

  return (
    <form onSubmit={handleSubmit}>
      <span className={classN}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter new task"
        />
      </span>

      <span className={classN}>
        <button>Add Item</button>
      </span>
    </form>
  );
};

export default ToDoForm;
