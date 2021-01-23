import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";

import rootSaga from "./saga";
import combineReducers from "./reducer";
import { UserAuthState } from "./reducer/userAuth/type";

export interface StoreState {
  userAuth: UserAuthState;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers,
  applyMiddleware(logger, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;
