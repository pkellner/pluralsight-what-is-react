import React, { forwardRef } from "react";
import FlipMove from "react-flip-move";

export default function TodoItems({ entries, deleteItem, showBorder }) {
  const FunctionalEntry = forwardRef(({ id, text }, ref) => {
    return (
      <li className={showBorder ? "theBorder px-2 mt-1 mb-1 ms-2" : "theBorderClear px-2 mt-1 mb-1 ms-2"}
        ref={ref}
        onClick={() => {
          deleteItem(id);
        }}
      >
        {text}
      </li>
    );
  });
  FunctionalEntry.displayName = "fwdRef";
  
  return (
    <ul className={showBorder ? "theBorder" : "theBorderClear"}>
      <FlipMove>
        {entries.map(({ id, text }) => {
          return <FunctionalEntry key={id} id={id} text={text} />;
        })}
      </FlipMove>
    </ul>
  );
}
