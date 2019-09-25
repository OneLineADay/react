export const EntryTypes = {
  CREATE_ENTRY_REQUEST: "CREATE_ENTRY_REQUEST",
  CREATE_ENTRY_SUCCESS: "CREATE_ENTRY_SUCCESS",
  CREATE_ENTRY_FAIL: "CREATE_ENTRY_FAIL",
  EDIT_ENTRY_REQUEST: "EDIT_ENTRY_REQUEST",
  EDIT_ENTRY_SUCCESS: "EDIT_ENTRY_SUCCESS",
  EDIT_ENTRY_FAIL: "CREATE_ENTRY_FAIL"
};

export const createEntry = entry => ({
  action: EntryTypes.CREATE_ENTRY_REQUEST,
  payload: entry
});

export const editEntry = entry => ({
  action: EntryTypes.EDIT_ENTRY_REQUEST,
  payload: entry
});
