import { EntryTypes } from "./entries.actions";
import { entries } from "data/entries";

const INITIAL_STATE = {
  entries,
  isFetching: false,
  error: null
};

export const entriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EntryTypes.CREATE_ENTRY_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case EntryTypes.CREATE_ENTRY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        entries: action.payload,
        error: null
      };
    case EntryTypes.CREATE_ENTRY_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.message
      };
    case EntryTypes.EDIT_ENTRY_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case EntryTypes.EDIT_ENTRY_SUCCESS:
      return {
        ...state,
        entries: action.payload,
        isFetching: false,
        error: null
      };
    case EntryTypes.EDIT_ENTRY_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.message
      };

    case EntryTypes.DELETE_ENTRIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case EntryTypes.DELETE_ENTRIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }
    case EntryTypes.DELETE_ENTRIES_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.message
      }
    case EntryTypes.FETCH_ENTRIES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case EntryTypes.FETCH_ENTRIES_SUCCESS:
      return {
        ...state,
        entries: action.payload,
        isFetching: false,
        error: null
      };
    case EntryTypes.FETCH_ENTRIES_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.message
      };
    default:
      return state;
  }
};
