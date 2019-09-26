import { all, takeLatest, put, call } from "redux-saga/effects";

import {
  UserTypes,
  signUpFail,
  signInFail,
  signInSuccess,
  signUpSuccess
} from "./user.actions";
import { login, signUp } from "utils";

function* signUpRequestAsync({ payload }) {
  const { username, email, password } = payload;
  try {
    const { data } = yield signUp(username, email, password);
    yield put(signUpSuccess(data.access_token));
  } catch (error) {
    yield put(signUpFail(error));
  }
}

function* watchSignUpRequest() {
  yield takeLatest(UserTypes.SIGN_UP_REQUEST, signUpRequestAsync);
}

function* signInRequestAsync({ payload }) {
  const { username, password } = payload;
  try {
    const { data } = yield login(username, password);
    yield put(signInSuccess(data.access_token));
  } catch (error) {
    yield put(signInFail(error));
  }
}

function* watchSignInRequest() {
  yield takeLatest(UserTypes.SIGN_IN_REQUEST, signInRequestAsync);
}

export function* userSagas() {
  yield all([call(watchSignUpRequest), call(watchSignInRequest)]);
}
