import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
<<<<<<< HEAD
import passportReducer from "./reducers/index";
=======
import passportReducer from "./reducers";
>>>>>>> 5a1e635d0f939dd65e08687c01f815d05b153e15

const middlewares = [thunk, logger];

const store = createStore(
  passportReducer,
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
