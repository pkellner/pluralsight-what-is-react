'use client'

import {getDataServerFunction} from "./get-data-server-function";

let dataPromise = null;

export function getDataPromise() {
  if (!dataPromise) {
    dataPromise = getDataServerFunction();
  }
  return dataPromise;
}
