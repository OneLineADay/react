import { EntryTypes } from "./entries.actions";

const INITIAL_STATE = {
  entries: [],
  isFetching: false,
  error: null
};

export const EntryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EntryTypes.EDIT_ENTRY_SUCCESS:
      return { ...state, entries: action.payload, isFetching: false };
    default:
      return state;
  }
};
