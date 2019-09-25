import { all, call, put, takeLatest } from "redux-saga/effects";
import { EntryTypes, createEntryFail, editEntryFail } from "./entries.actions";

function* createEntryAsyc() {
  try {
  } catch (error) {
    yield put(createEntryFail(error));
  }
}

function* watchCreateEntryRequest() {
  yield takeLatest(EntryTypes.CREATE_ENTRY_REQUEST, createEntryAsyc);
}

function* editEntryAsync() {
  try {
  } catch (error) {
    yield editEntryFail(error);
  }
}

function* watchEditEntryRequest() {
  yield takeLatest(EntryTypes.EDIT_ENTRY_REQUEST, editEntryAsync);
}

export function* entrySagas() {
  yield all([call(watchCreateEntryRequest), call(watchEditEntryRequest)]);
}
