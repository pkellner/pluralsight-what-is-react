import {use} from "react";

export default function ListItems({intsPromise}) {

  const ints = use(intsPromise);

  return (
    <div>
      {JSON.stringify(ints)}
    </div>
  )
}