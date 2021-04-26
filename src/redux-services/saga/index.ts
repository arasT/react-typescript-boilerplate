import { all, fork } from "redux-saga/effects";
import { getPublicIpWatcher } from "./common";

export const rootSaga = function* root() {
  yield all([
    // Auth
    fork(getPublicIpWatcher),
  ]);
};
