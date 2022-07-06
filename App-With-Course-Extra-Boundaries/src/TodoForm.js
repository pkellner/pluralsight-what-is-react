import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  
  const [ userInput, setUserInput ] = useState('');
  
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.length > 0) {
      addTask(userInput);
    }
    setUserInput("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={userInput} type="text" onChange={handleChange} placeholder="Enter new task"/>
      <button>Add Item</button>
    </form>
  );
};

export default ToDoForm;
