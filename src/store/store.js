import { combineReducers, createStore } from "redux";
import userReducer from "./user";
import ratesReducer from "./rates";

const store = createStore(
  combineReducers({
    user: userReducer,
    rate: ratesReducer
  })
);

export { store };
