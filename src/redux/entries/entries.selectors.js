import { createSelector } from "reselect";

const selectEntries = state => state.entries;

export const selectEntryObjects = createSelector(
  [selectEntries],
  entries => entries.entries
);

export const selectIsFetching = createSelector(
  [selectEntries],
  entries => entries.isFetching
);

export const selectError = createSelector(
  [selectEntries],
  entries => entries.error
);
