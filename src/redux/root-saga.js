import { all, call } from "redux-saga/effects";
import { entriesSagas } from "./entries/entries.sagas";
import { userSagas } from "./user/user.sagas";

export function* rootSaga() {
  yield all([call(entriesSagas), call(userSagas)]);
}
