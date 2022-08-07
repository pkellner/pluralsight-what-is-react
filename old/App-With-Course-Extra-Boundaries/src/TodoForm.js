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
    ? "theBorder px-2 mt-2 mb-2 ms-1"
    : "theBorderClear px-2 mt-2 mb-2 ms-1";

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-7">
          <input
            className={classN}
            value={userInput}
            type="text"
            onChange={handleChange}
            placeholder="Enter new task"
          />
        </div>

        <div className="col-5">
          <button className={classN}>Add Item</button>
        </div>
      </div>
    </form>
  );
};

export default ToDoForm;
