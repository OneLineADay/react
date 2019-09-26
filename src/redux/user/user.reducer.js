import { UserTypes } from "./user.actions";

const INITIAL_STATE = {
  token: null,
  error: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null
      };
    case UserTypes.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload.message
      };
    case UserTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null
      };
    case UserTypes.SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload.message
      };
    case UserTypes.SIGN_OUT_REQUEST:
      return INITIAL_STATE;
    default:
      return state;
  }
};
