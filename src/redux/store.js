import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const getStore = () =>{
  const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
return store;
}

export const store = getStore();

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
