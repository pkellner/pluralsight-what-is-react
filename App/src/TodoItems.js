import React from "react";

export default function TodoItems(props) {
  const entries = props.entries;
  const deleteItem = props.deleteItem;
  
  return (
    <ul className="mt-3">
      <b className="ms-3">Items:</b>
      {entries.map(({ id, text }) => {
        return (
          <li
            className="px-2 mt-1 mb-1 ms-2"
            key={id}
            onClick={() => {
              deleteItem(id);
            }}
          > 
            {text}
          </li>
        );
      })}
    </ul>
  );
}
