import React, { forwardRef } from "react";
import FlipMove from "react-flip-move";

export default function TodoItems({ entries, deleteItem, showBorder }) {
  const FunctionalEntry = forwardRef(({ id, text }, ref) => {
    return (
      <li className={showBorder ? "theBorder" : "theBorderClear"}
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
    <ul className={showBorder ? "theList theBorder" : "theList theBorderClear"}>
      <FlipMove>
        {entries.map(({ id, text }) => {
          return <FunctionalEntry key={id} id={id} text={text} />;
        })}
      </FlipMove>
    </ul>
  );
}
