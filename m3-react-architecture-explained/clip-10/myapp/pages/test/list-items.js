import {use} from "react";

function ListItems({intsPromise}) {

  const ints = use(intsPromise);
  return (
    <div>
      {JSON.stringify(ints)}
    </div>
  )
}