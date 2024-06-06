
import { Suspense } from "react";
import ListItems from "./list-items";
import {towersOfHanoiPromise} from "@/utils/tower-of-hanoi.ts";


const promiseForTowersOfHanoi = towersOfHanoiPromise(3, true);

export default async function Page() {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ListItems promiseForTowersOfHanoi={promiseForTowersOfHanoi} />
    </Suspense>
  );
}
