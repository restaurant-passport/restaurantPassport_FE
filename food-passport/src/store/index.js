import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import passportReducer from "./reducers/index";
import { setToken } from "../components/Authentication/token";

const middlewares = [thunk, logger, setToken];

const store = createStore(
  passportReducer,
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
