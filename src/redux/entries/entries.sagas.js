import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  EntryTypes,
  createEntryFail,
  editEntryFail,
  createEntrySuccess,
  editEntrySuccess
} from "./entries.actions";
import { createEntry, editEntry } from "../api";

function* createEntryAsyc({ payload }) {
  try {
    const data = yield createEntry(payload);
    yield put(createEntrySuccess(data));
  } catch (error) {
    yield put(createEntryFail(error));
  }
}

function* watchCreateEntryRequest() {
  yield takeLatest(EntryTypes.CREATE_ENTRY_REQUEST, createEntryAsyc);
}

function* editEntryAsync({ payload }) {
  try {
    const data = yield editEntry(payload);
    yield put(editEntrySuccess(data));
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
