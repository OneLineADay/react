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
  action: EntryTypes.CREATE_ENTRY_REQUEST,
  payload: entry
});

export const createEntrySuccess = entry => ({
  action: EntryTypes.CREATE_ENTRY_SUCCESS,
  payload: entry
});

export const createEntryFail = error => ({
  action: EntryTypes.CREATE_ENTRY_FAIL,
  payload: error
});

export const editEntryRequest = entry => ({
  action: EntryTypes.EDIT_ENTRY_REQUEST,
  payload: entry
});

export const editEntrySuccess = entry => ({
  action: EntryTypes.EDIT_ENTRY_SUCCESS,
  payload: entry
});

export const editEntryFail = error => ({
  action: EntryTypes.EDIT_ENTRY_FAIL,
  payload: error
});
