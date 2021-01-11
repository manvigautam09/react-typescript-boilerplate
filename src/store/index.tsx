import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";

import history from "../history";
import rootSaga from "./saga";
import combineReducers from "./reducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers,
  applyMiddleware(logger, sagaMiddleware, routerMiddleware(history))
);
sagaMiddleware.run(rootSaga);
export default store;
