import React, { Component, useState } from "react";
import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const [showBorder, setShowBorder] = useState(true);
  const [showInvisibleButton, setShowInvisibleButton] = useState(false);
  const [toDoList, setToDoList] = useState([
    { text: "Buy Sugar", id: 1656632538430 },
    { text: "Eat Carrots", id: 1656632478827 },
    // { text: "Return Oats", id: 1656632472927 },
  ]);

  function deleteItem(id) {
    let copy = toDoList.filter(function (rec) {
      return id !== rec.id;
    });
    setToDoList(copy);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [{ text: userInput, id: Date.now() }, ...copy];
    setToDoList(copy);
  };

  return (
    <div>
      <button
        className="invisibleButton"
        onClick={() => {
          setShowInvisibleButton(!showInvisibleButton);
        }}
      >
        Toggle Show Button
      </button>
      <div
        className={
          showInvisibleButton && showBorder
            ? "todoListMain theBorder"
            : "todoListMain theBorderClear"
        }
      >
        
        <button
          className={showInvisibleButton ? "visibleButton" : "invisibleButton"}
          onClick={() => {
            setShowBorder(!showBorder);
          }}
        >
          Show Component Borders
        </button>
        <div
          className={
            showBorder
              ? "todoListMain theBorder"
              : "todoListMain theBorderClear"
          }
        >
          <div
            className={
              showBorder ? "header theBorder" : "header theBorderClear"
            }
          >
            <TodoForm addTask={addTask} showBorder={showBorder}></TodoForm>
          </div>
          <hr />
          <TodoItems
            entries={toDoList}
            deleteItem={deleteItem}
            showBorder={showBorder}
          />
        </div>
      </div>
    </div>
  );
}

/*

Add "Return Oats"
Delete Eat Carrots
Delete Buy Sugar
Buy Gas


 */
