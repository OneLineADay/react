import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/user.reducer";
import { entriesReducer } from "./entries/entries.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    entries: entriesReducer
  })
);
