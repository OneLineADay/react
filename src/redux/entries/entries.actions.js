export const EntryTypes = {
  CREATE_ENTRY_REQUEST: "CREATE_ENTRY_REQUEST",
  CREATE_ENTRY_SUCCESS: "CREATE_ENTRY_SUCCESS",
  CREATE_ENTRY_FAIL: "CREATE_ENTRY_FAIL",
  EDIT_ENTRY_REQUEST: "EDIT_ENTRY_REQUEST",
  EDIT_ENTRY_SUCCESS: "EDIT_ENTRY_SUCCESS",
  EDIT_ENTRY_FAIL: "EDIT_ENTRY_FAIL",
  FETCH_ENTRIES_REQUEST: "FETCH_ENTRIES_REQUEST",
  FETCH_ENTRIES_SUCCESS: "FETCH_ENTRIES_SUCCESS",
  FETCH_ENTRIES_FAIL: "FETCH_ENTRIES_FAIL"
};

export const createEntryRequest = entry => ({
  type: EntryTypes.CREATE_ENTRY_REQUEST,
  payload: entry
});

export const createEntrySuccess = entry => ({
  type: EntryTypes.CREATE_ENTRY_SUCCESS,
  payload: entry
});

export const createEntryFail = error => ({
  type: EntryTypes.CREATE_ENTRY_FAIL,
  payload: error
});

export const editEntryRequest = entry => ({
  type: EntryTypes.EDIT_ENTRY_REQUEST,
  payload: entry
});

export const editEntrySuccess = entry => ({
  type: EntryTypes.EDIT_ENTRY_SUCCESS,
  payload: entry
});

export const editEntryFail = error => ({
  type: EntryTypes.EDIT_ENTRY_FAIL,
  payload: error
});

export const fetchEntriesRequest = date => ({
  type: EntryTypes.FETCH_ENTRIES_REQUEST,
  payload: date
});

export const fetchEntriesSuccess = entries => ({
  type: EntryTypes.FETCH_ENTRIES_SUCCESS,
  payload: entries
});

export const fetchEntriesFail = error => ({
  type: EntryTypes.FETCH_ENTRIES_FAIL,
  payload: error
});
