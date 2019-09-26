import { all, takeLatest, put, call } from "redux-saga/effects";

import { UserTypes, signUpFail, signInFail } from "./user.actions";

function* signUpRequestAsync({ payload }) {
  try {
  } catch (error) {
    yield put(signUpFail(error));
  }
}

function* watchSignUpRequest() {
  yield takeLatest(UserTypes.SIGN_UP_REQUEST, signUpRequestAsync);
}

function* signInRequestAsync({ payload }) {
  try {
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
